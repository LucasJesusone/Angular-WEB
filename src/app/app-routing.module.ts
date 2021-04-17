import { ChangePasswordComponent } from './pages/Usuarios/change-password/change-password.component';
import { LicenseComponent } from './pages/License/license.component';
import { OsViewComponent } from './pages/Os/os-view/os-view.component';
import { OsEditComponent } from './pages/Os/os-edit/os-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/Usuarios/users/users.component' 
import { UserCreateComponent } from './pages/Usuarios/user-create/user-create.component';
import { UserUpdateComponent } from './pages/Usuarios/user-update/user-update.component';
import { UserDeleteComponent } from './pages/Usuarios/user-delete/user-delete.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthGuard } from './pages/auth/guards/auth.guard';
import { OsComponent } from './pages/Os/os.component';

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
