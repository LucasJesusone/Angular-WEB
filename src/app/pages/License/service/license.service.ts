import { externalApi } from '../../../../environments/environment';
import { PageInfo } from '../../../shared/model/pageInfo.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LicenseModel } from '../model/license.model';
import { DeviceModel } from '../model/device.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST,OPTIONS,DELETE,PUT',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  private baseUrlService: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrlService = externalApi.apiService;
  }

  getLicense(): Observable<LicenseModel[]> {
    return this.httpClient.get<LicenseModel[]>(
      `${this.baseUrlService + 'license/'}`,
      httpOptions
    );
  }

  //service/license/?findIdentity=${identity}

  getDevicesPaginate(pageNumber: number): Observable<PageInfo<DeviceModel[]>> {
    const params = new HttpParams({
      fromObject: {
        pageNumber: pageNumber.toString(),
      },
    });
    return this.httpClient.get<PageInfo<DeviceModel[]>>(
      `${this.baseUrlService + 'device/'}`,
      { params }
    );
  }

  updateDevices(deviceId: DeviceModel): Observable<DeviceModel> {
    console.log(deviceId);
    const url = `${this.baseUrlService + 'device'}/${deviceId.deviceId}`;
    console.log(url);
    return this.httpClient.put<DeviceModel>(url, deviceId, httpOptions);
  }

  devices(identity: LicenseModel): Observable<LicenseModel> {
    console.log(identity);
    const url = `${this.baseUrlService + 'device'}/${identity.device.identity}`;
    console.log(url);
    return this.httpClient.put<LicenseModel>(url, identity, httpOptions);
  }

  // licenseModel = new LicenseModel();
  // model.identity
  getDeviceLicense(
    identity: string,
    licenseType: string
  ): Observable<LicenseModel> {

    return this.httpClient.get<LicenseModel>(
      `${
        this.baseUrlService +
        `license/device/${identity}/licensetype/${licenseType}`
      }`
    );
  }

  readById(deviceId: string): Observable<DeviceModel> {
    return this.httpClient.get<DeviceModel>(
      `${this.baseUrlService + 'device/id'}/${deviceId}`,
      httpOptions
    );
  }

  // filterByLicenseIdentity(identity: string): Observable<LicenseModel> {
  //   return this.httpClient.get<LicenseModel>(
  //     `${this.baseUrlService + 'device/identity'}/${identity}`,
  //     httpOptions
  //   );
  // }

  filterByIdentity(identity: string): Observable<LicenseModel> {
    return this.httpClient.get<LicenseModel>(
      `${this.baseUrlService + 'device/identity'}/${identity}`,
      httpOptions
    );
  }


  
}
