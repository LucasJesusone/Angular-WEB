<<<<<<< HEAD:src/app/theme/navbar/navbar.component.ts
import { LoginService } from '../../pages/auth/service/login.service';
=======
import { LoginService } from '../security/auth/service/login.service';
>>>>>>> da3c7bbfbbcb673e0f64e39984ed79699f2b3cb3:src/app/pages/Navbar/navbar.component.ts
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
