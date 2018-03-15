import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {
    private greetUrl = 'api/Graph';

    constructor(private _http: Http) { }

    getGraph(): Observable<any> {
        return this._http.get(this.greetUrl).map((response: Response) => {
            return response.text();
        });
    }
}