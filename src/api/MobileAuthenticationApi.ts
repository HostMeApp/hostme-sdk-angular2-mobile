/**
 * Qa mobile api
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: mb
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH }                                         from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class MobileAuthenticationApi {
    protected basePath = 'http://hostme-services-qa.azurewebsites.net';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * 
     * 
     * @param accessToken 
     */
    public getExternalFacebookLogin(accessToken: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.getExternalFacebookLoginWithHttpInfo(accessToken, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * 
     * @param provider 
     * @param error 
     */
    public getExternalLogin(provider: string, error?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.getExternalLoginWithHttpInfo(provider, error, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * 
     * @param returnUrl 
     * @param generateState 
     */
    public getExternalLogins(returnUrl: string, generateState?: boolean, extraHttpRequestParams?: any): Observable<Array<models.ExternalLogin>> {
        return this.getExternalLoginsWithHttpInfo(returnUrl, generateState, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * 
     * 
     * @param accessToken 
     */
    public getExternalFacebookLoginWithHttpInfo(accessToken: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/authorization/externalFacebookLogin`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'accessToken' is not null or undefined
        if (accessToken === null || accessToken === undefined) {
            throw new Error('Required parameter accessToken was null or undefined when calling getExternalFacebookLogin.');
        }
        if (accessToken !== undefined) {
            queryParameters.set('access_token', <any>accessToken);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'text/json', 
            'application/xml', 
            'text/xml'
        ];
        
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            responseType: ResponseContentType.Json
        });

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * 
     * @param provider 
     * @param error 
     */
    public getExternalLoginWithHttpInfo(provider: string, error?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/authorization/externalLogin`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'provider' is not null or undefined
        if (provider === null || provider === undefined) {
            throw new Error('Required parameter provider was null or undefined when calling getExternalLogin.');
        }
        if (provider !== undefined) {
            queryParameters.set('provider', <any>provider);
        }
        if (error !== undefined) {
            queryParameters.set('error', <any>error);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'text/json', 
            'application/xml', 
            'text/xml'
        ];
        
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            responseType: ResponseContentType.Json
        });

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * 
     * @param returnUrl 
     * @param generateState 
     */
    public getExternalLoginsWithHttpInfo(returnUrl: string, generateState?: boolean, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/authorization/externalLogins`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'returnUrl' is not null or undefined
        if (returnUrl === null || returnUrl === undefined) {
            throw new Error('Required parameter returnUrl was null or undefined when calling getExternalLogins.');
        }
        if (returnUrl !== undefined) {
            queryParameters.set('returnUrl', <any>returnUrl);
        }
        if (generateState !== undefined) {
            queryParameters.set('generateState', <any>generateState);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'text/json', 
            'application/xml', 
            'text/xml'
        ];
        
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            responseType: ResponseContentType.Json
        });

        return this.http.request(path, requestOptions);
    }

}
