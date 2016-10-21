import { Configuration } from './configuration';
import { Http, Headers, RequestOptionsArgs, Response } from '@angular/http';
import { Injectable }   from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

export interface IAccessTokenViewModel {
    access_token: string;
    '.expires': Date;
    '.issued': Date;
    token_type: string;
    userName: string;
}

@Injectable()
export class AuthorizationService {

    constructor(
        private configuration: Configuration,
        private http: Http) {
    }

    public authorize(userName: string, password: string): Observable<void> {
        let urlPath = this.configuration.basePath + '/Token';

        let headerParams: Headers = new Headers();
        headerParams.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

        let data = 'grant_type=password' + '&username=' + userName + '&password=' + password;

        let options: RequestOptionsArgs = {
                headers: headerParams,
                method: 'POST',
                responseType: 1
            };

        return this.http.post(urlPath, data, options).map((response: Response) => response.json()).map((model: IAccessTokenViewModel) => {
            this.configuration.accessToken = model.access_token;
        });
    };
}
