import { Injectable } from '@angular/core';
import { IResponse } from 'src/models/response.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class MedicalFormService {
  constructor(private http: ApiService) {}

  /**
   * @method addMadicalData
   * @param url
   * @description this method uses http get
   */
  public addMedicalData(body: any) {
    this.http.httpPost('', body).subscribe((response) => {
      console.log('response ===>', response);
    });
  }
  /**
   * @method httpGetWithUrl
   * @param url
   * @description this method uses http get
   */
  public getMedicalData(id: any) {
    return this.http.httpGet(`/licences/${id}`);
  }
}
