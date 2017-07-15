import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, Headers } from '@angular/http';
import 'rxjs';
import { AppGlobals } from '../../global';

@Injectable()
export class ChatBotServiceProvider {

  constructor(public http: Http, public _appGlobals: AppGlobals) {
    console.log('Hello ChatBotServiceProvider Provider');
  }

  getData() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this._appGlobals.baseUrl, options).toPromise();
  }

  sendData(data) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(data)
    return this.http.post(this._appGlobals.baseUrl, data, options).toPromise();
  }
  
  getOneData(chatId) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this._appGlobals.baseUrl+ "/" +chatId, options).toPromise();
  }
}
