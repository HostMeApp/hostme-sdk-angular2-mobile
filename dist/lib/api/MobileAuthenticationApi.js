"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var http_3 = require('@angular/http');
require('rxjs/add/operator/map');
var variables_1 = require('../variables');
var configuration_1 = require('../configuration');
var MobileAuthenticationApi = (function () {
    function MobileAuthenticationApi(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'http://hostme-services-qa.azurewebsites.net';
        this.defaultHeaders = new http_1.Headers();
        this.configuration = new configuration_1.Configuration();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }
    MobileAuthenticationApi.prototype.getExternalFacebookLogin = function (accessToken, extraHttpRequestParams) {
        return this.getExternalFacebookLoginWithHttpInfo(accessToken, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileAuthenticationApi.prototype.getExternalLogin = function (provider, error, extraHttpRequestParams) {
        return this.getExternalLoginWithHttpInfo(provider, error, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileAuthenticationApi.prototype.getExternalLogins = function (returnUrl, generateState, extraHttpRequestParams) {
        return this.getExternalLoginsWithHttpInfo(returnUrl, generateState, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileAuthenticationApi.prototype.getExternalFacebookLoginWithHttpInfo = function (accessToken, extraHttpRequestParams) {
        var path = this.basePath + "/authorization/externalFacebookLogin";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (accessToken === null || accessToken === undefined) {
            throw new Error('Required parameter accessToken was null or undefined when calling getExternalFacebookLogin.');
        }
        if (accessToken !== undefined) {
            queryParameters.set('access_token', accessToken);
        }
        var consumes = [];
        var produces = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileAuthenticationApi.prototype.getExternalLoginWithHttpInfo = function (provider, error, extraHttpRequestParams) {
        var path = this.basePath + "/authorization/externalLogin";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (provider === null || provider === undefined) {
            throw new Error('Required parameter provider was null or undefined when calling getExternalLogin.');
        }
        if (provider !== undefined) {
            queryParameters.set('provider', provider);
        }
        if (error !== undefined) {
            queryParameters.set('error', error);
        }
        var consumes = [];
        var produces = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileAuthenticationApi.prototype.getExternalLoginsWithHttpInfo = function (returnUrl, generateState, extraHttpRequestParams) {
        var path = this.basePath + "/authorization/externalLogins";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (returnUrl === null || returnUrl === undefined) {
            throw new Error('Required parameter returnUrl was null or undefined when calling getExternalLogins.');
        }
        if (returnUrl !== undefined) {
            queryParameters.set('returnUrl', returnUrl);
        }
        if (generateState !== undefined) {
            queryParameters.set('generateState', generateState);
        }
        var consumes = [];
        var produces = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileAuthenticationApi = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Optional()),
        __param(1, core_1.Inject(variables_1.BASE_PATH)),
        __param(2, core_1.Optional()), 
        __metadata('design:paramtypes', [http_1.Http, String, configuration_1.Configuration])
    ], MobileAuthenticationApi);
    return MobileAuthenticationApi;
}());
exports.MobileAuthenticationApi = MobileAuthenticationApi;
//# sourceMappingURL=MobileAuthenticationApi.js.map