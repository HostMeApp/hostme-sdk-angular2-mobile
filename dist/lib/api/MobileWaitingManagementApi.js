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
var MobileWaitingManagementApi = (function () {
    function MobileWaitingManagementApi(http, basePath, configuration) {
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
    MobileWaitingManagementApi.prototype.checkInWithWaiting = function (waitingItemId, extraHttpRequestParams) {
        return this.checkInWithWaitingWithHttpInfo(waitingItemId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileWaitingManagementApi.prototype.close = function (waitingItemId, extraHttpRequestParams) {
        return this.closeWithHttpInfo(waitingItemId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileWaitingManagementApi.prototype.confirmWithApp = function (confirmationCode, conf, extraHttpRequestParams) {
        return this.confirmWithAppWithHttpInfo(confirmationCode, conf, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileWaitingManagementApi.prototype.getInLine = function (value, extraHttpRequestParams) {
        return this.getInLineWithHttpInfo(value, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileWaitingManagementApi.prototype.getUserCurrentWaiting = function (extraHttpRequestParams) {
        return this.getUserCurrentWaitingWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileWaitingManagementApi.prototype.leaveTheLine = function (waitingItemId, extraHttpRequestParams) {
        return this.leaveTheLineWithHttpInfo(waitingItemId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileWaitingManagementApi.prototype.markAllMessagesAsRead = function (waitingItemId, extraHttpRequestParams) {
        return this.markAllMessagesAsReadWithHttpInfo(waitingItemId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileWaitingManagementApi.prototype.putOnHold = function (restaurantId, waitingItemId, extraHttpRequestParams) {
        return this.putOnHoldWithHttpInfo(restaurantId, waitingItemId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileWaitingManagementApi.prototype.sendMessageToWaiting = function (waitingItemId, createMessage, extraHttpRequestParams) {
        return this.sendMessageToWaitingWithHttpInfo(waitingItemId, createMessage, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileWaitingManagementApi.prototype.takeOffHold = function (restaurantId, waitingItemId, extraHttpRequestParams) {
        return this.takeOffHoldWithHttpInfo(restaurantId, waitingItemId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileWaitingManagementApi.prototype.checkInWithWaitingWithHttpInfo = function (waitingItemId, extraHttpRequestParams) {
        var path = this.basePath + ("/api/wm/mb/waitings/" + waitingItemId + "/checkin");
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (waitingItemId === null || waitingItemId === undefined) {
            throw new Error('Required parameter waitingItemId was null or undefined when calling checkInWithWaiting.');
        }
        var consumes = [];
        var produces = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        if (this.configuration.accessToken) {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Put,
            headers: headers,
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileWaitingManagementApi.prototype.closeWithHttpInfo = function (waitingItemId, extraHttpRequestParams) {
        var path = this.basePath + ("/api/wm/mb/waitings/" + waitingItemId + "/close");
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (waitingItemId === null || waitingItemId === undefined) {
            throw new Error('Required parameter waitingItemId was null or undefined when calling close.');
        }
        var consumes = [];
        var produces = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        if (this.configuration.accessToken) {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Put,
            headers: headers,
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileWaitingManagementApi.prototype.confirmWithAppWithHttpInfo = function (confirmationCode, conf, extraHttpRequestParams) {
        var path = this.basePath + ("/api/wm/mb/waitings/confirm/" + confirmationCode);
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (confirmationCode === null || confirmationCode === undefined) {
            throw new Error('Required parameter confirmationCode was null or undefined when calling confirmWithApp.');
        }
        if (conf === null || conf === undefined) {
            throw new Error('Required parameter conf was null or undefined when calling confirmWithApp.');
        }
        var consumes = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml',
            'application/x-www-form-urlencoded',
            'image/jpg',
            'image/jpeg',
            'image/png'
        ];
        var produces = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        if (this.configuration.accessToken) {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: conf == null ? '' : JSON.stringify(conf),
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileWaitingManagementApi.prototype.getInLineWithHttpInfo = function (value, extraHttpRequestParams) {
        var path = this.basePath + "/api/wm/mb/waitings";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (value === null || value === undefined) {
            throw new Error('Required parameter value was null or undefined when calling getInLine.');
        }
        var consumes = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml',
            'application/x-www-form-urlencoded',
            'image/jpg',
            'image/jpeg',
            'image/png'
        ];
        var produces = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        if (this.configuration.accessToken) {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: value == null ? '' : JSON.stringify(value),
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileWaitingManagementApi.prototype.getUserCurrentWaitingWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + "/api/wm/mb/waitings";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        var consumes = [];
        var produces = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        if (this.configuration.accessToken) {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileWaitingManagementApi.prototype.leaveTheLineWithHttpInfo = function (waitingItemId, extraHttpRequestParams) {
        var path = this.basePath + ("/api/wm/mb/waitings/" + waitingItemId + "/cancel");
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (waitingItemId === null || waitingItemId === undefined) {
            throw new Error('Required parameter waitingItemId was null or undefined when calling leaveTheLine.');
        }
        var consumes = [];
        var produces = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        if (this.configuration.accessToken) {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Put,
            headers: headers,
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileWaitingManagementApi.prototype.markAllMessagesAsReadWithHttpInfo = function (waitingItemId, extraHttpRequestParams) {
        var path = this.basePath + ("/api/wm/mb/waitings/" + waitingItemId + "/messages/readall");
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (waitingItemId === null || waitingItemId === undefined) {
            throw new Error('Required parameter waitingItemId was null or undefined when calling markAllMessagesAsRead.');
        }
        var consumes = [];
        var produces = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        if (this.configuration.accessToken) {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileWaitingManagementApi.prototype.putOnHoldWithHttpInfo = function (restaurantId, waitingItemId, extraHttpRequestParams) {
        var path = this.basePath + ("/api/wm/mb/waitings/" + waitingItemId + "/putonhold");
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling putOnHold.');
        }
        if (waitingItemId === null || waitingItemId === undefined) {
            throw new Error('Required parameter waitingItemId was null or undefined when calling putOnHold.');
        }
        if (restaurantId !== undefined) {
            queryParameters.set('restaurantId', restaurantId);
        }
        var consumes = [];
        var produces = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        if (this.configuration.accessToken) {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Put,
            headers: headers,
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileWaitingManagementApi.prototype.sendMessageToWaitingWithHttpInfo = function (waitingItemId, createMessage, extraHttpRequestParams) {
        var path = this.basePath + ("/api/wm/mb/waitings/" + waitingItemId + "/sendmessage");
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (waitingItemId === null || waitingItemId === undefined) {
            throw new Error('Required parameter waitingItemId was null or undefined when calling sendMessageToWaiting.');
        }
        if (createMessage === null || createMessage === undefined) {
            throw new Error('Required parameter createMessage was null or undefined when calling sendMessageToWaiting.');
        }
        var consumes = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml',
            'application/x-www-form-urlencoded',
            'image/jpg',
            'image/jpeg',
            'image/png'
        ];
        var produces = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        if (this.configuration.accessToken) {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: createMessage == null ? '' : JSON.stringify(createMessage),
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileWaitingManagementApi.prototype.takeOffHoldWithHttpInfo = function (restaurantId, waitingItemId, extraHttpRequestParams) {
        var path = this.basePath + ("/api/wm/mb/waitings/" + waitingItemId + "/takeoffhold");
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling takeOffHold.');
        }
        if (waitingItemId === null || waitingItemId === undefined) {
            throw new Error('Required parameter waitingItemId was null or undefined when calling takeOffHold.');
        }
        if (restaurantId !== undefined) {
            queryParameters.set('restaurantId', restaurantId);
        }
        var consumes = [];
        var produces = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        if (this.configuration.accessToken) {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Put,
            headers: headers,
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileWaitingManagementApi = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Optional()),
        __param(1, core_1.Inject(variables_1.BASE_PATH)),
        __param(2, core_1.Optional()), 
        __metadata('design:paramtypes', [http_1.Http, String, configuration_1.Configuration])
    ], MobileWaitingManagementApi);
    return MobileWaitingManagementApi;
}());
exports.MobileWaitingManagementApi = MobileWaitingManagementApi;
//# sourceMappingURL=MobileWaitingManagementApi.js.map