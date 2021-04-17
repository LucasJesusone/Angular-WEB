import { LoginService } from '../service/login.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const currentUser = this.loginService.currentUserValue;

    if (currentUser.id) {
      return true;
    }

    this.router.navigate(['auth/login']);
    return false;
  }
}

//   console.log('currentUser', currentUser);
//   console.log('IF');
//   console.log('ELSE');

// Método que faz a verificação se o usuário está logado ou não, caso não, faz o redirecionamento para a página de LOG in.
