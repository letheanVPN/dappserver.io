/**
 * Lethean Server
 * Lethean dAppServer
 *
 * The version of the OpenAPI document: 3.1.1
 * Contact: hello@lt.hn
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { ProcessAddDTO } from '../model/models';
import { ProcessKillDTO } from '../model/models';
import { ProcessRunDTO } from '../model/models';
import { ProcessStartDTO } from '../model/models';
import { ProcessStopDTO } from '../model/models';


import { serverSDKConfiguration }                                     from '../configuration';



export interface ProcessServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: serverSDKConfiguration;

    /**
     * 
     * 
     * @param processAddDTO 
     */
    addProcess(processAddDTO: ProcessAddDTO, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param processKillDTO 
     */
    killProcess(processKillDTO: ProcessKillDTO, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param processRunDTO 
     */
    runProcess(processRunDTO: ProcessRunDTO, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param processStartDTO 
     */
    startProcess(processStartDTO: ProcessStartDTO, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param processStopDTO 
     */
    stopProcess(processStopDTO: ProcessStopDTO, extraHttpRequestParams?: any): Observable<{}>;

}