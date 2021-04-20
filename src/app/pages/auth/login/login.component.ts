import { UsersService } from 'src/app/pages/Usuarios/service/users.service';
import { LoaderService } from 'src/app/loader/loader.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { JwtAuthentication } from '../model/jwt.authentication.model';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  returnUrl: string;
  submitted = false;
  loading = false;
  error = '' ;
  private authentication: JwtAuthentication

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    public loaderService: LoaderService) { }

  ngOnInit(){
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  public get f() { return this.formLogin.controls }


  onSubmitButton() {
    this.submitted = true;

  

    this.loading = true;
    this.authentication = new JwtAuthentication(this.f.username.value, this.f.password.value)
    this.loginService.login(this.authentication)
    .pipe(first())
    .subscribe(
      response => {
        response.token = response.token;
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.router.navigate(['/'])
      },
      error => {
        this.loginService.showMessage("Usuário e/ou Senha incorretos")
        this.error = error;
        this.loading = false;
        this.submitted = false;
        
      });
 
      
  }
}
