import { LoginService } from '../auth/service/login.service';
import { Component } from '@angular/core';
import { LoaderService } from 'src/app/loader/loader.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isNavbarCollapsed = true;

  constructor(
    public loaderService: LoaderService,
    private loginService: LoginService
  ) {}

  logout() {
    this.loginService.userLogout();
  }
}
