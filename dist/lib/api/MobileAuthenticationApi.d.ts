import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class MobileAuthenticationApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    getExternalFacebookLogin(accessToken: string, extraHttpRequestParams?: any): Observable<{}>;
    getExternalLogin(provider: string, error?: string, extraHttpRequestParams?: any): Observable<{}>;
    getExternalLogins(returnUrl: string, generateState?: boolean, extraHttpRequestParams?: any): Observable<Array<models.ExternalLogin>>;
    getExternalFacebookLoginWithHttpInfo(accessToken: string, extraHttpRequestParams?: any): Observable<Response>;
    getExternalLoginWithHttpInfo(provider: string, error?: string, extraHttpRequestParams?: any): Observable<Response>;
    getExternalLoginsWithHttpInfo(returnUrl: string, generateState?: boolean, extraHttpRequestParams?: any): Observable<Response>;
}
