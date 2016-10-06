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
var MobileReservationsApi = (function () {
    function MobileReservationsApi(http, basePath, configuration) {
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
    MobileReservationsApi.prototype.addNewReservation = function (value, extraHttpRequestParams) {
        return this.addNewReservationWithHttpInfo(value, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileReservationsApi.prototype.closeAsCanceled = function (reservationId, cancelReservationContract, extraHttpRequestParams) {
        return this.closeAsCanceledWithHttpInfo(reservationId, cancelReservationContract, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileReservationsApi.prototype.getReservationById = function (reservationId, extraHttpRequestParams) {
        return this.getReservationByIdWithHttpInfo(reservationId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileReservationsApi.prototype.getUserReservations = function (queryOptions, extraHttpRequestParams) {
        return this.getUserReservationsWithHttpInfo(queryOptions, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileReservationsApi.prototype.readAllMessage = function (reservationId, extraHttpRequestParams) {
        return this.readAllMessageWithHttpInfo(reservationId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileReservationsApi.prototype.sendMessageToReservation = function (reservationId, createMessageContract, extraHttpRequestParams) {
        return this.sendMessageToReservationWithHttpInfo(reservationId, createMessageContract, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileReservationsApi.prototype.updateReservation = function (reservationId, value, extraHttpRequestParams) {
        return this.updateReservationWithHttpInfo(reservationId, value, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileReservationsApi.prototype.addNewReservationWithHttpInfo = function (value, extraHttpRequestParams) {
        var path = this.basePath + "/api/rsv/mb/reservations";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (value === null || value === undefined) {
            throw new Error('Required parameter value was null or undefined when calling addNewReservation.');
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
    MobileReservationsApi.prototype.closeAsCanceledWithHttpInfo = function (reservationId, cancelReservationContract, extraHttpRequestParams) {
        var path = this.basePath + ("/api/rsv/mb/reservations/" + reservationId + "/cancel");
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (reservationId === null || reservationId === undefined) {
            throw new Error('Required parameter reservationId was null or undefined when calling closeAsCanceled.');
        }
        if (cancelReservationContract === null || cancelReservationContract === undefined) {
            throw new Error('Required parameter cancelReservationContract was null or undefined when calling closeAsCanceled.');
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
            method: http_2.RequestMethod.Put,
            headers: headers,
            body: cancelReservationContract == null ? '' : JSON.stringify(cancelReservationContract),
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileReservationsApi.prototype.getReservationByIdWithHttpInfo = function (reservationId, extraHttpRequestParams) {
        var path = this.basePath + ("/api/rsv/mb/reservations/" + reservationId);
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (reservationId === null || reservationId === undefined) {
            throw new Error('Required parameter reservationId was null or undefined when calling getReservationById.');
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
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileReservationsApi.prototype.getUserReservationsWithHttpInfo = function (queryOptions, extraHttpRequestParams) {
        var path = this.basePath + "/api/rsv/mb/reservations";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (queryOptions !== undefined) {
            queryParameters.set('queryOptions', queryOptions);
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
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileReservationsApi.prototype.readAllMessageWithHttpInfo = function (reservationId, extraHttpRequestParams) {
        var path = this.basePath + ("/api/rsv/mb/reservations/" + reservationId + "/messages/readall");
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (reservationId === null || reservationId === undefined) {
            throw new Error('Required parameter reservationId was null or undefined when calling readAllMessage.');
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
    MobileReservationsApi.prototype.sendMessageToReservationWithHttpInfo = function (reservationId, createMessageContract, extraHttpRequestParams) {
        var path = this.basePath + ("/api/rsv/mb/reservations/" + reservationId + "/messages");
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (reservationId === null || reservationId === undefined) {
            throw new Error('Required parameter reservationId was null or undefined when calling sendMessageToReservation.');
        }
        if (createMessageContract === null || createMessageContract === undefined) {
            throw new Error('Required parameter createMessageContract was null or undefined when calling sendMessageToReservation.');
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
            body: createMessageContract == null ? '' : JSON.stringify(createMessageContract),
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileReservationsApi.prototype.updateReservationWithHttpInfo = function (reservationId, value, extraHttpRequestParams) {
        var path = this.basePath + ("/api/rsv/mb/reservations/" + reservationId);
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (reservationId === null || reservationId === undefined) {
            throw new Error('Required parameter reservationId was null or undefined when calling updateReservation.');
        }
        if (value === null || value === undefined) {
            throw new Error('Required parameter value was null or undefined when calling updateReservation.');
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
            method: http_2.RequestMethod.Put,
            headers: headers,
            body: value == null ? '' : JSON.stringify(value),
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileReservationsApi = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Optional()),
        __param(1, core_1.Inject(variables_1.BASE_PATH)),
        __param(2, core_1.Optional()), 
        __metadata('design:paramtypes', [http_1.Http, String, configuration_1.Configuration])
    ], MobileReservationsApi);
    return MobileReservationsApi;
}());
exports.MobileReservationsApi = MobileReservationsApi;
//# sourceMappingURL=MobileReservationsApi.js.map