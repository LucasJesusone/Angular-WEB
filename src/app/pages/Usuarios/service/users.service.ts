
import { UserModel } from './../model/user.model';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PageInfo } from 'src/app/shared/model/pageInfo.model';

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
export class UsersService {
  private baseUrlService: string;
  private endPoint: string = 'user';

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) {
    this.baseUrlService = environment.apiService + this.endPoint;
  }

  create(user: UserModel): Observable<UserModel> {
    return this.httpClient.post<UserModel>(
      `${this.baseUrlService}`,
      user,
      httpOptions
    );
  }

  get(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(
      `${this.baseUrlService}`,
      httpOptions
    );
  } 

  getAllPaginate(pageNumber: number): Observable<PageInfo<UserModel[]>> {
    const params = new HttpParams({
      fromObject: {
        pageNumber: pageNumber.toString(),
      },
    });
    return this.httpClient.get<PageInfo<UserModel[]>>(
      `${this.baseUrlService + '/pagination'}`,
      { params }
    );
  }


  changePassword(user: UserModel): Observable<UserModel> {
    const url = `${this.baseUrlService}/${user.userId}`;
    console.log(user)
    return this.httpClient.put<UserModel>(url, user)
  }

  update(user: UserModel): Observable<UserModel> {
    console.log(user)
    const url = `${this.baseUrlService}/${user.userId}`;
    return this.httpClient.put<UserModel>(url, user, httpOptions);
  }

  readById(userId: string): Observable<UserModel> {
    return this.httpClient.get<UserModel>(
      `${this.baseUrlService}/${userId}`,
      httpOptions
    );
  }

  

  delete(userId: string): Observable<UserModel> {
    const url = `${this.baseUrlService}/${userId}`;
    return this.httpClient.delete<UserModel>(url, httpOptions);
  }

  /*updateStatus(user: UserModel): Observable<UserModel> {
    const url = `${this.baseUrlService}/${user.status}`;
    return this.httpClient.put<UserModel>(url, user, httpOptions);
  }

  delete(identifier): Observable<T> {
    return this.httpClient.delete<T>(this.baseUrlService + identifier)
        .pipe(catchError(this.handleError('delete')));
  }
*/
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 1500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }
}
