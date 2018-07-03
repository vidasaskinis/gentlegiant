import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IStockData } from './models/StockData';

@Injectable()
export class AppService {
  constructor(private _http: Http) { }

  getGraph(): Observable<IStockData> {
    return this._http.get('api/Graph').map((response: Response) => {
      return response.json();
    });
  }
}
