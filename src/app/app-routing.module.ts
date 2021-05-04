import { DeviceViewComponent } from './pages/license/device-view/device-view.component';
import { DeviceEditComponent } from './pages/license/device-edit/device-edit.component';
<<<<<<< HEAD
import { LicenseComponent } from './pages/license/os-list/license.component';
import { OsViewComponent } from './pages/os/os-view/os-view.component';
import { OsEditComponent } from './pages/os/os-edit/os-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/user/user-list/users.component';
import { UserCreateComponent } from './pages/user/user-create/user-create.component';
import { UserUpdateComponent } from './pages/user/user-update/user-update.component';
import { UserDeleteComponent } from './pages/user/user-delete/user-delete.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthGuard } from './pages/auth/guards/auth.guard';
import { OsComponent } from './pages/os/os-list/os.component';
=======
import { LicenseComponent } from './pages/license/license.component';
import { OsViewComponent } from './pages/ordem-servico/os-view/os-view.component';
import { OsEditComponent } from './pages/ordem-servico/os-edit/os-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/usuarios/users/users.component';
import { UserCreateComponent } from './pages/usuarios/user-create/user-create.component';
import { UserUpdateComponent } from './pages/usuarios/user-update/user-update.component';
import { UserDeleteComponent } from './pages/usuarios/user-delete/user-delete.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { LoginComponent } from './pages/security/auth/login/login.component';
import { AuthGuard } from './pages/security/auth/guards/auth.guard';
import { OsComponent } from './pages/ordem-servico/os.component';
>>>>>>> da3c7bbfbbcb673e0f64e39984ed79699f2b3cb3

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'users/create',
        component: UserCreateComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'users/update/:id',
        component: UserUpdateComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'users/delete/:id',
        component: UserDeleteComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'os',
        component: OsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'os/edit/:os',
        component: OsEditComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'os/view/:os',
        component: OsViewComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'license',
        component: LicenseComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'license/view/id/:deviceId',
        component: DeviceViewComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'license/edit/identity/:identity',
        component: DeviceEditComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'auth',
    component: AuthenticationComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
