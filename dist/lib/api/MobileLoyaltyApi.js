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
var MobileLoyaltyApi = (function () {
    function MobileLoyaltyApi(http, basePath, configuration) {
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
    MobileLoyaltyApi.prototype.cancelMembershipAtRestaurant = function (restaurantId, extraHttpRequestParams) {
        return this.cancelMembershipAtRestaurantWithHttpInfo(restaurantId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileLoyaltyApi.prototype.enrollIntoLoyaltyProgram = function (restaurantId, extraHttpRequestParams) {
        return this.enrollIntoLoyaltyProgramWithHttpInfo(restaurantId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileLoyaltyApi.prototype.getAllUserMemberships = function (extraHttpRequestParams) {
        return this.getAllUserMembershipsWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileLoyaltyApi.prototype.getCustomerRedeemRequests = function (restaurantId, extraHttpRequestParams) {
        return this.getCustomerRedeemRequestsWithHttpInfo(restaurantId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileLoyaltyApi.prototype.getMemberRewardOptions = function (restaurantId, extraHttpRequestParams) {
        return this.getMemberRewardOptionsWithHttpInfo(restaurantId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileLoyaltyApi.prototype.getMemberTransactions = function (restaurantId, extraHttpRequestParams) {
        return this.getMemberTransactionsWithHttpInfo(restaurantId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileLoyaltyApi.prototype.getMembershipByRestaurantId = function (restaurantId, extraHttpRequestParams) {
        return this.getMembershipByRestaurantIdWithHttpInfo(restaurantId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileLoyaltyApi.prototype.getRedeemRequestInfo = function (restaurantId, redeemId, extraHttpRequestParams) {
        return this.getRedeemRequestInfoWithHttpInfo(restaurantId, redeemId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileLoyaltyApi.prototype.submitRequestForRedeem = function (restaurantId, rewardId, extraHttpRequestParams) {
        return this.submitRequestForRedeemWithHttpInfo(restaurantId, rewardId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MobileLoyaltyApi.prototype.cancelMembershipAtRestaurantWithHttpInfo = function (restaurantId, extraHttpRequestParams) {
        var path = this.basePath + ("/api/loyalty/mb/membership/" + restaurantId);
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling cancelMembershipAtRestaurant.');
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
            method: http_2.RequestMethod.Delete,
            headers: headers,
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    MobileLoyaltyApi.prototype.enrollIntoLoyaltyProgramWithHttpInfo = function (restaurantId, extraHttpRequestParams) {
        var path = this.basePath + ("/api/loyalty/mb/membership/" + restaurantId);
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling enrollIntoLoyaltyProgram.');
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
    MobileLoyaltyApi.prototype.getAllUserMembershipsWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + "/api/loyalty/mb/membership";
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
    MobileLoyaltyApi.prototype.getCustomerRedeemRequestsWithHttpInfo = function (restaurantId, extraHttpRequestParams) {
        var path = this.basePath + ("/api/loyalty/mb/membership/" + restaurantId + "/redeems");
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling getCustomerRedeemRequests.');
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
    MobileLoyaltyApi.prototype.getMemberRewardOptionsWithHttpInfo = function (restaurantId, extraHttpRequestParams) {
        var path = this.basePath + ("/api/loyalty/mb/membership/" + restaurantId + "/rewards");
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling getMemberRewardOptions.');
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
    MobileLoyaltyApi.prototype.getMemberTransactionsWithHttpInfo = function (restaurantId, extraHttpRequestParams) {
        var path = this.basePath + ("/api/loyalty/mb/membership/" + restaurantId + "/transactions");
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling getMemberTransactions.');
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
    MobileLoyaltyApi.prototype.getMembershipByRestaurantIdWithHttpInfo = function (restaurantId, extraHttpRequestParams) {
        var path = this.basePath + ("/api/loyalty/mb/membership/" + restaurantId);
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling getMembershipByRestaurantId.');
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
    MobileLoyaltyApi.prototype.getRedeemRequestInfoWithHttpInfo = function (restaurantId, redeemId, extraHttpRequestParams) {
        var path = this.basePath + ("/api/loyalty/mb/membership/" + restaurantId + "/redeems/" + redeemId);
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling getRedeemRequestInfo.');
        }
        if (redeemId === null || redeemId === undefined) {
            throw new Error('Required parameter redeemId was null or undefined when calling getRedeemRequestInfo.');
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
    MobileLoyaltyApi.prototype.submitRequestForRedeemWithHttpInfo = function (restaurantId, rewardId, extraHttpRequestParams) {
        var path = this.basePath + ("/api/loyalty/mb/membership/" + restaurantId + "/rewards/" + rewardId + "/redeem");
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling submitRequestForRedeem.');
        }
        if (rewardId === null || rewardId === undefined) {
            throw new Error('Required parameter rewardId was null or undefined when calling submitRequestForRedeem.');
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
    MobileLoyaltyApi = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Optional()),
        __param(1, core_1.Inject(variables_1.BASE_PATH)),
        __param(2, core_1.Optional()), 
        __metadata('design:paramtypes', [http_1.Http, String, configuration_1.Configuration])
    ], MobileLoyaltyApi);
    return MobileLoyaltyApi;
}());
exports.MobileLoyaltyApi = MobileLoyaltyApi;
//# sourceMappingURL=MobileLoyaltyApi.js.map