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
var MobileCoreApi = (function () {
    function MobileCoreApi(http, basePath, configuration) {
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
    MobileCoreApi.prototype.addExternalLogin = function (model, extraHttpRequestParams) {
        return this.addExternalLoginWithHttpInfo(model, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileCoreApi.prototype.changePassword = function (model, extraHttpRequestParams) {
        return this.changePasswordWithHttpInfo(model, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileCoreApi.prototype.checkIn = function (checkinContract, extraHttpRequestParams) {
        return this.checkInWithHttpInfo(checkinContract, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileCoreApi.prototype.findRestaurants = function (lat, lon, name, city, extraHttpRequestParams) {
        return this.findRestaurantsWithHttpInfo(lat, lon, name, city, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileCoreApi.prototype.getAllRestaurants = function (extraHttpRequestParams) {
        return this.getAllRestaurantsWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileCoreApi.prototype.getListOfLocations = function (extraHttpRequestParams) {
        return this.getListOfLocationsWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileCoreApi.prototype.getManageInfo = function (returnUrl, generateState, extraHttpRequestParams) {
        return this.getManageInfoWithHttpInfo(returnUrl, generateState, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileCoreApi.prototype.getRegistrationToken = function (token, extraHttpRequestParams) {
        return this.getRegistrationTokenWithHttpInfo(token, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileCoreApi.prototype.getReservationAvailability = function (restaurantId, date, partySize, rangeInMinutes, areas, extraHttpRequestParams) {
        return this.getReservationAvailabilityWithHttpInfo(restaurantId, date, partySize, rangeInMinutes, areas, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileCoreApi.prototype.getRestaurantById = function (id, extraHttpRequestParams) {
        return this.getRestaurantByIdWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileCoreApi.prototype.getUserInfo = function (extraHttpRequestParams) {
        return this.getUserInfoWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileCoreApi.prototype.getUserProfile = function (extraHttpRequestParams) {
        return this.getUserProfileWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileCoreApi.prototype.postProfileImage = function (image, extraHttpRequestParams) {
        return this.postProfileImageWithHttpInfo(image, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileCoreApi.prototype.profileImage = function (extraHttpRequestParams) {
        return this.profileImageWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileCoreApi.prototype.register = function (model, extraHttpRequestParams) {
        return this.registerWithHttpInfo(model, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileCoreApi.prototype.registerExternal = function (model, extraHttpRequestParams) {
        return this.registerExternalWithHttpInfo(model, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileCoreApi.prototype.removeLogin = function (model, extraHttpRequestParams) {
        return this.removeLoginWithHttpInfo(model, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileCoreApi.prototype.resetPassword = function (model, extraHttpRequestParams) {
        return this.resetPasswordWithHttpInfo(model, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileCoreApi.prototype.setPassword = function (model, extraHttpRequestParams) {
        return this.setPasswordWithHttpInfo(model, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileCoreApi.prototype.setPushChannelAsync = function (channel, extraHttpRequestParams) {
        return this.setPushChannelAsyncWithHttpInfo(channel, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileCoreApi.prototype.updateUserProfile = function (profile, extraHttpRequestParams) {
        return this.updateUserProfileWithHttpInfo(profile, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileCoreApi.prototype.addExternalLoginWithHttpInfo = function (model, extraHttpRequestParams) {
        var path = this.basePath + "/api/core/mb/account/addExternalLogin";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling addExternalLogin.');
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
            body: model == null ? '' : JSON.stringify(model),
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileCoreApi.prototype.changePasswordWithHttpInfo = function (model, extraHttpRequestParams) {
        var path = this.basePath + "/api/core/mb/account/changePassword";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling changePassword.');
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
            body: model == null ? '' : JSON.stringify(model),
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileCoreApi.prototype.checkInWithHttpInfo = function (checkinContract, extraHttpRequestParams) {
        var path = this.basePath + "/api/core/mb/restaurant/checkin";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (checkinContract === null || checkinContract === undefined) {
            throw new Error('Required parameter checkinContract was null or undefined when calling checkIn.');
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
            body: checkinContract == null ? '' : JSON.stringify(checkinContract),
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileCoreApi.prototype.findRestaurantsWithHttpInfo = function (lat, lon, name, city, extraHttpRequestParams) {
        var path = this.basePath + "/api/core/mb/restaurants/find";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (lat !== undefined) {
            queryParameters.set('lat', lat);
        }
        if (lon !== undefined) {
            queryParameters.set('lon', lon);
        }
        if (name !== undefined) {
            queryParameters.set('name', name);
        }
        if (city !== undefined) {
            queryParameters.set('city', city);
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
    MobileCoreApi.prototype.getAllRestaurantsWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + "/api/core/mb/restaurants";
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
    MobileCoreApi.prototype.getListOfLocationsWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + "/api/core/mb/locations";
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
    MobileCoreApi.prototype.getManageInfoWithHttpInfo = function (returnUrl, generateState, extraHttpRequestParams) {
        var path = this.basePath + "/api/core/mb/account/manageInfo";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (returnUrl === null || returnUrl === undefined) {
            throw new Error('Required parameter returnUrl was null or undefined when calling getManageInfo.');
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
    MobileCoreApi.prototype.getRegistrationTokenWithHttpInfo = function (token, extraHttpRequestParams) {
        var path = this.basePath + ("/api/core/mb/campaign/" + token);
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling getRegistrationToken.');
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
    MobileCoreApi.prototype.getReservationAvailabilityWithHttpInfo = function (restaurantId, date, partySize, rangeInMinutes, areas, extraHttpRequestParams) {
        var path = this.basePath + ("/api/core/mb/restaurants/" + restaurantId + "/availability");
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling getReservationAvailability.');
        }
        if (date === null || date === undefined) {
            throw new Error('Required parameter date was null or undefined when calling getReservationAvailability.');
        }
        if (partySize === null || partySize === undefined) {
            throw new Error('Required parameter partySize was null or undefined when calling getReservationAvailability.');
        }
        if (rangeInMinutes === null || rangeInMinutes === undefined) {
            throw new Error('Required parameter rangeInMinutes was null or undefined when calling getReservationAvailability.');
        }
        if (date !== undefined) {
            queryParameters.set('date', date);
        }
        if (partySize !== undefined) {
            queryParameters.set('partySize', partySize);
        }
        if (rangeInMinutes !== undefined) {
            queryParameters.set('rangeInMinutes', rangeInMinutes);
        }
        if (areas !== undefined) {
            queryParameters.set('areas', areas);
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
    MobileCoreApi.prototype.getRestaurantByIdWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + ("/api/core/mb/restaurants/" + id);
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getRestaurantById.');
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
    MobileCoreApi.prototype.getUserInfoWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + "/api/core/mb/account/userInfo";
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
    MobileCoreApi.prototype.getUserProfileWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + "/api/core/mb/account/profile";
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
    MobileCoreApi.prototype.postProfileImageWithHttpInfo = function (image, extraHttpRequestParams) {
        var path = this.basePath + "/api/core/mb/account/profile/image";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (image === null || image === undefined) {
            throw new Error('Required parameter image was null or undefined when calling postProfileImage.');
        }
        var consumes = [
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
            body: image == null ? '' : JSON.stringify(image),
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileCoreApi.prototype.profileImageWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + "/api/core/mb/account/profile/image";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        var consumes = [];
        var produces = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml',
            'application/octet-stream'
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
    MobileCoreApi.prototype.registerWithHttpInfo = function (model, extraHttpRequestParams) {
        var path = this.basePath + "/api/core/mb/account/register";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling register.');
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
            body: model == null ? '' : JSON.stringify(model),
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileCoreApi.prototype.registerExternalWithHttpInfo = function (model, extraHttpRequestParams) {
        var path = this.basePath + "/api/core/mb/account/registerExternal";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling registerExternal.');
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
            body: model == null ? '' : JSON.stringify(model),
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileCoreApi.prototype.removeLoginWithHttpInfo = function (model, extraHttpRequestParams) {
        var path = this.basePath + "/api/core/mb/account/removeLogin";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling removeLogin.');
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
            body: model == null ? '' : JSON.stringify(model),
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileCoreApi.prototype.resetPasswordWithHttpInfo = function (model, extraHttpRequestParams) {
        var path = this.basePath + "/api/core/mb/account/resetPassword";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling resetPassword.');
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
            body: model == null ? '' : JSON.stringify(model),
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileCoreApi.prototype.setPasswordWithHttpInfo = function (model, extraHttpRequestParams) {
        var path = this.basePath + "/api/core/mb/account/setPassword";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling setPassword.');
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
            body: model == null ? '' : JSON.stringify(model),
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileCoreApi.prototype.setPushChannelAsyncWithHttpInfo = function (channel, extraHttpRequestParams) {
        var path = this.basePath + "/api/core/mb/account/setPushChannel";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (channel === null || channel === undefined) {
            throw new Error('Required parameter channel was null or undefined when calling setPushChannelAsync.');
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
            body: channel == null ? '' : JSON.stringify(channel),
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileCoreApi.prototype.updateUserProfileWithHttpInfo = function (profile, extraHttpRequestParams) {
        var path = this.basePath + "/api/core/mb/account/profile";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (profile === null || profile === undefined) {
            throw new Error('Required parameter profile was null or undefined when calling updateUserProfile.');
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
            body: profile == null ? '' : JSON.stringify(profile),
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileCoreApi = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Optional()),
        __param(1, core_1.Inject(variables_1.BASE_PATH)),
        __param(2, core_1.Optional()), 
        __metadata('design:paramtypes', [http_1.Http, String, configuration_1.Configuration])
    ], MobileCoreApi);
    return MobileCoreApi;
}());
exports.MobileCoreApi = MobileCoreApi;
//# sourceMappingURL=MobileCoreApi.js.map