import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from 'src/app/pages/auth/model/response';
import { environment } from 'src/environments/environment';
import { JwtAuthentication } from '../model/jwt.authentication.model';
import { UserDetails } from '../model/user.model';
import { Token } from '../model/token'

const httpOptions = {
  headers : new HttpHeaders(
    {
      'content-type': 'application/json',
      'Acess-Control-Allow-Origin': '*'
    })
};
@Injectable({providedIn: 'root'})
export class LoginService {
    private currentUserSubject: BehaviorSubject<UserDetails>;
    public currentUser: Observable<UserDetails>;

    constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) {
        this.currentUserSubject = new BehaviorSubject<UserDetails>(JSON.parse(localStorage.getItem('currentUser') || '{}' ));
        this.currentUser = this.currentUserSubject.asObservable();
        
    }

    public get currentUserValue(): UserDetails {
        return this.currentUserSubject.value;
    }

    login(authentication: JwtAuthentication) {
       return this.http.post<Response<Token>>(`${environment.api}/auth`, authentication, httpOptions)
       .pipe(map(response => {
        // login successful if there's a jwt token in the response
        if (response && response.data.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshed
            this.currentUserSubject.next(response.userDetails);
        }

        return response.userDetails;
    }));
}

    home() {
        this.router.navigate(['/']);
    }

    userLogout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null!)
        this.router.navigate(['/auth/login']);
    }

    showMessage(msg: string, isError: boolean = true): void {
        this.snackBar.open(msg, "X", {
          duration: 1500,
          horizontalPosition: "right",
          verticalPosition: "top",
          panelClass: isError ? 'msg-error' : 'msg-success'
        })
      }
   
}