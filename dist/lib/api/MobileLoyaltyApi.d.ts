import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class MobileLoyaltyApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    cancelMembershipAtRestaurant(restaurantId: number, extraHttpRequestParams?: any): Observable<{}>;
    enrollIntoLoyaltyProgram(restaurantId: number, extraHttpRequestParams?: any): Observable<models.Membership>;
    getAllUserMemberships(extraHttpRequestParams?: any): Observable<Array<models.Membership>>;
    getCustomerRedeemRequests(restaurantId: number, extraHttpRequestParams?: any): Observable<Array<models.RedeemRequestInfo>>;
    getMemberRewardOptions(restaurantId: number, extraHttpRequestParams?: any): Observable<Array<models.RewardInfo>>;
    getMemberTransactions(restaurantId: number, extraHttpRequestParams?: any): Observable<Array<models.Transaction>>;
    getMembershipByRestaurantId(restaurantId: number, extraHttpRequestParams?: any): Observable<models.Membership>;
    getRedeemRequestInfo(restaurantId: number, redeemId: string, extraHttpRequestParams?: any): Observable<models.RedeemRequestInfo>;
    submitRequestForRedeem(restaurantId: number, rewardId: string, extraHttpRequestParams?: any): Observable<models.RedeemRequestInfo>;
    cancelMembershipAtRestaurantWithHttpInfo(restaurantId: number, extraHttpRequestParams?: any): Observable<Response>;
    enrollIntoLoyaltyProgramWithHttpInfo(restaurantId: number, extraHttpRequestParams?: any): Observable<Response>;
    getAllUserMembershipsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    getCustomerRedeemRequestsWithHttpInfo(restaurantId: number, extraHttpRequestParams?: any): Observable<Response>;
    getMemberRewardOptionsWithHttpInfo(restaurantId: number, extraHttpRequestParams?: any): Observable<Response>;
    getMemberTransactionsWithHttpInfo(restaurantId: number, extraHttpRequestParams?: any): Observable<Response>;
    getMembershipByRestaurantIdWithHttpInfo(restaurantId: number, extraHttpRequestParams?: any): Observable<Response>;
    getRedeemRequestInfoWithHttpInfo(restaurantId: number, redeemId: string, extraHttpRequestParams?: any): Observable<Response>;
    submitRequestForRedeemWithHttpInfo(restaurantId: number, rewardId: string, extraHttpRequestParams?: any): Observable<Response>;
}