import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import {
  MatPaginatorModule,
  MatPaginatorIntl,
} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavbarComponent } from './theme/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponentComponent } from './theme/footer/footer-component.component';
import { UsersComponent } from './pages/user/user-list/users.component';
import { UserCreateComponent } from './pages/user/user-create/user-create.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './pages/user/service/users.service';
import { UserRead2Component } from './pages/user/user-read/user-read2.component';
import { UserUpdateComponent } from './pages/user/user-update/user-update.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UserDeleteComponent } from './pages/user/user-delete/user-delete.component';
import { LoginComponent } from './pages/auth/login/login.component';
=======
import { NavbarComponent } from './pages/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponentComponent } from './pages/footer/footer-component.component';
import { UsersComponent } from './pages/usuarios/users/users.component';
import { UserCreateComponent } from './pages/usuarios/user-create/user-create.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './pages/usuarios/service/users.service';
import { UserRead2Component } from './pages/usuarios/user-read/user-read2.component';
import { UserUpdateComponent } from './pages/usuarios/user-update/user-update.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UserDeleteComponent } from './pages/usuarios/user-delete/user-delete.component';
import { LoginComponent } from './pages/security/auth/login/login.component';
>>>>>>> da3c7bbfbbcb673e0f64e39984ed79699f2b3cb3
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { InterceptorService } from './loader/interceptor.service';
import { getPortuguesPaginatorIntl } from './shared/helpers/table-translator';
<<<<<<< HEAD
import { OsComponent } from './pages/os/os-list/os.component';
import { OsEditComponent } from './pages/os/os-edit/os-edit.component';
import { OsViewComponent } from './pages/os/os-view/os-view.component';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LicenseComponent } from './pages/license/os-list/license.component';
import { ChangePasswordComponent } from './pages/user/change-password/change-password.component';
import { DialogDeleteComponent } from './pages/license/dialog-delete/dialog-delete.component';
=======
import { OsComponent } from './pages/ordem-servico/os.component';
import { OsEditComponent } from './pages/ordem-servico/os-edit/os-edit.component';
import { OsViewComponent } from './pages/ordem-servico/os-view/os-view.component';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LicenseComponent } from './pages/license/license.component';
import { ChangePasswordComponent } from './pages/usuarios/change-password/change-password.component';
import { DialogDeleteComponent } from './pages/License/dialog-delete/dialog-delete.component';
>>>>>>> da3c7bbfbbcb673e0f64e39984ed79699f2b3cb3
import { DeviceEditComponent } from './pages/license/device-edit/device-edit.component';
import { DeviceViewComponent } from './pages/license/device-view/device-view.component';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    FooterComponentComponent,
    AppComponent,
    NavbarComponent,
    UsersComponent,
    UserCreateComponent,
    UserRead2Component,
    UserUpdateComponent,
    UserDeleteComponent,
    LoginComponent,
    HomeComponent,
    AuthenticationComponent,
    OsComponent,
    OsEditComponent,
    OsViewComponent,
    LicenseComponent,
    ChangePasswordComponent,
    DialogDeleteComponent,
    DeviceEditComponent,
    DeviceViewComponent,
  ],
  entryComponents: [ChangePasswordComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSortModule,
    MatIconModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    BrowserAnimationsModule,
    LayoutModule,
    NgbModule,
  ],
  providers: [
    UsersService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    { provide: MatPaginatorIntl, useValue: getPortuguesPaginatorIntl() },
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
