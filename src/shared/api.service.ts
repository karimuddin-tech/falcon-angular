import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  /**
   * @method httpGetWithUrl
   * @param url
   * @description this method uses http get
   */
  public httpGetWithUrl(url: string) {
    return this.http.get(url);
  }

  /**
   * @method httpPostWithUrl
   * @param url
   * @description this method uses http get
   */
  public httpPostWithUrl(url: string, data: any) {
    return this.http.post(url, data);
  }
  /**
   * @method httpGet
   * @param url
   * @description this method uses http get
   */
  public httpGet(url: string) {
    console.log("url ===>",this.apiUrl + url)
    return this.http.get(this.apiUrl + url);
  }

  /**
   * @method httpPost
   * @param url
   * @param body
   * @description this method uses http post
   */
  public httpPost(url: string, body: any) {
    return this.http.post(this.apiUrl + url, body);
  }

  /**
   * @method httpPut
   * @param url
   * @param body
   * @description this method uses http put
   */
  public httpPut(url: string, body: any) {
    return this.http.put(this.apiUrl + url, body);
  }

  /**
   * @method httpDelete
   * @param url
   * @description this method uses http delete
   */
  public httpDelete(url: string) {
    return this.http.delete(this.apiUrl + url);
  }
  /**
   * @method downloadFile
   * @param url
   * @description this method uses http delete
   */
  public downloadFile(url: string): any {
    return this.http.get(url, { responseType: 'blob' });
  }
}
