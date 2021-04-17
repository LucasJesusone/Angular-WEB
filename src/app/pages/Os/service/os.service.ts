import { OsModel } from '../model/os.model';
import { PageInfo } from '../../../shared/model/pageInfo.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from 'ngx-pagination/dist/pagination-controls.directive';

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
export class OsService {
  private baseUrlService: string;
  private Endpoint: string = 'os';
 
  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) {
    this.baseUrlService = environment.apiService + this.Endpoint; // Método que chama a url da API no enviroment da aplicação, acrescentada do endpoint definido no private acima.
  }

  // Serviço que trás toda a paginação da API,
  getAllPaginate(pageNumber: number): Observable<PageInfo<OsModel[]>> {
    const params = new HttpParams({
      fromObject: {
         pageNumber: pageNumber.toString(), // Método para pegar o pageNumber que vem da api, mais especificamente como '?pageNumber=1'.
      },
    });
    return this.httpClient.get<PageInfo<OsModel[]>>(
      `${this.baseUrlService + '/pagination'}`,
      { params } // Retorno do parâmetro criado acima após a chamada da api.
    );
  }

  //Serviço para trazer os dados pelo código da Ordem de Serviço (codos)
  readByCodos(os: string): Observable<OsModel> {
    return this.httpClient.get<OsModel>(
      `${this.baseUrlService}/${os}`,
      httpOptions
    );
  }

  // Serviço que faz a atualização de campos na instrução de embarque.
  updateoS(putOs: OsModel): Observable<OsModel> {
    const url = `${this.baseUrlService}/${putOs.os}`;
    return this.httpClient.put<OsModel>(url, putOs, httpOptions);
  }

  filterData(status: string, ie: string, os: string): Observable<PageInfo<OsModel[]>> {
    const params = new HttpParams({
      fromObject: {
        status: status.toString(),
        ie: ie.toString(),
        os: os.toString(),
      },
    });
    return this.httpClient.get<PageInfo<OsModel[]>>(
      `${this.baseUrlService + '/filter'}`
   );
}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 1500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }
}
