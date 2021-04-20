import { licenseModel } from './../model/license.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageInfo } from 'src/app/shared/model/pageInfo.model';
import { externalApi } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private baseUrlService: string;
  private endPoint: string = 'device'



  constructor(private httpClient: HttpClient) {
        this.baseUrlService = externalApi.apiService + this.endPoint;
   }


   getDevices(pageNumber: number) {
      const params = new HttpParams({
        fromObject: {
          pageNumber: pageNumber.toString()
        },
      });
      return this.httpClient.get<PageInfo<licenseModel[]>>(
        `${this.baseUrlService + '/pagination'}`,
        {params}
      )
   }
}