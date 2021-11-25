import { Injectable } from '@angular/core';
import { IResponse } from 'src/models/response.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class InfoFormService {
  constructor(private http: ApiService) {}

  /**
   * @method addInfoData
   * @param url
   * @description this method uses http get
   */
  public addInfoData(body: any) {
    this.http.httpPost('', body).subscribe((response) => {
      console.log('response ===>', response);
    });
  }
  /**
   * @method httpGetWithUrl
   * @param url
   * @description this method uses http get
   */
  public getInfoData(id: any) {
    return this.http.httpGet(`/flights/${id}`);
  }

  
}
