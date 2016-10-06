import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class MobileReservationsApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    addNewReservation(value: models.CreateCustomerReservation, extraHttpRequestParams?: any): Observable<models.Reservation>;
    closeAsCanceled(reservationId: string, cancelReservationContract: models.CancelReservation, extraHttpRequestParams?: any): Observable<{}>;
    getReservationById(reservationId: string, extraHttpRequestParams?: any): Observable<models.Reservation>;
    getUserReservations(queryOptions?: string, extraHttpRequestParams?: any): Observable<Array<models.Reservation>>;
    readAllMessage(reservationId: string, extraHttpRequestParams?: any): Observable<{}>;
    sendMessageToReservation(reservationId: string, createMessageContract: models.CreateMessage, extraHttpRequestParams?: any): Observable<{}>;
    updateReservation(reservationId: string, value: models.UpdateReservation, extraHttpRequestParams?: any): Observable<{}>;
    addNewReservationWithHttpInfo(value: models.CreateCustomerReservation, extraHttpRequestParams?: any): Observable<Response>;
    closeAsCanceledWithHttpInfo(reservationId: string, cancelReservationContract: models.CancelReservation, extraHttpRequestParams?: any): Observable<Response>;
    getReservationByIdWithHttpInfo(reservationId: string, extraHttpRequestParams?: any): Observable<Response>;
    getUserReservationsWithHttpInfo(queryOptions?: string, extraHttpRequestParams?: any): Observable<Response>;
    readAllMessageWithHttpInfo(reservationId: string, extraHttpRequestParams?: any): Observable<Response>;
    sendMessageToReservationWithHttpInfo(reservationId: string, createMessageContract: models.CreateMessage, extraHttpRequestParams?: any): Observable<Response>;
    updateReservationWithHttpInfo(reservationId: string, value: models.UpdateReservation, extraHttpRequestParams?: any): Observable<Response>;
}
