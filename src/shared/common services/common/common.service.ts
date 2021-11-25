import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  initialMsg: string;
  personInfo: any;
  constructor(
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}
  /**
   * @method get
   * @param keys: string
   * @param value: string
   * @description The get method is use for decrypt the value.
   */
  public get(keys: string, value: string | null) {
    if (value == null || value == undefined || value == '') {
      return value;
    }
    const key = CryptoJS.enc.Utf8.parse(keys);
    const iv = CryptoJS.enc.Utf8.parse(keys);
    const decrypted = CryptoJS.AES.decrypt(value, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  /**
   * @method set
   * @param keys: string
   * @param value: string
   * @description The set method is use for encrypt the value.
   */
  public set(keys: string, value: string) {
    const key = CryptoJS.enc.Utf8.parse(keys);
    const iv = CryptoJS.enc.Utf8.parse(keys);
    const encrypted = CryptoJS.AES.encrypt(
      CryptoJS.enc.Utf8.parse(value.toString()),
      key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    );
    return encrypted.toString();
  }
  /**
   * @method encrypt
   * @param value: any
   * @description The set method is use for encrypt the value.
   */
  public encrypt(value: any) {
    const data = JSON.stringify(value);
    const encrypted = CryptoJS.AES.encrypt(data, 'masterEncrypt#@2020');
    return encrypted.toString();
  }

  /**
   * @method decrypt
   * @param value: string
   * @description The get method is use for decrypt the value.
   */
  public decrypt(value: string) {
    const decrypted = CryptoJS.AES.decrypt(value, 'masterEncrypt#@2020');
    const data = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    return data;
  }

  /**
   * @method decryptData
   * @description this method decrypts the data
   */
  public decryptData(name: string) {
    if (localStorage.getItem(name) != null) {
      const data = this.get('123456$#@$^@1ERF', localStorage.getItem(name));
      const tempData = data ? JSON.parse(data) : null;
      return tempData;
    }
  }
  /**
   * @method encryptAndSaveData
   * @description this method encrypts the data and saves in local
   * @param data: any
   * @param name: string
   */
  public encryptAndSaveData(data: any, name: string) {
    const tempData = JSON.stringify(data);
    localStorage.setItem(name, this.set('123456$#@$^@1ERF', tempData));
  }

  /**
   * @method showSuccessToaster
   * @param title: string
   * @param message: string
   * @description this method shows the success toast
   */
  public showSuccessToaster(message: string, title: string) {
    this.toastr.success(message, title);
  }

  /**
   * @method showErrorToaster
   * @param title: string
   * @param message: string
   * @description this method shows the error toast
   */
  public showErrorToaster(message: string, title: string) {
    this.toastr.error(message, title);
  }

  /**
   * @method showSpinner
   * @description this method shows the spinner
   */
  public showSpinner() {
    this.spinner.show();
  }

  /**
   * @method hideSpinner
   * @description this method shows the spinner
   */
  public hideSpinner() {
    this.spinner.hide();
  }
}
