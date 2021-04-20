import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { Router } from '@angular/router';
import { UserModel } from '../model/user.model';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MustMatch } from 'src/app/shared/helpers/must-match.validator';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  usersCreate: UserModel = new UserModel();

  constructor(
    private usersService: UsersService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(4)]],
        password: ['', [Validators.required, Validators.minLength(4)]],
        confirmPassword: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  public get f() {
    return this.registerForm.controls;
  }

  sendForm() {
    this.usersCreate.name = this.registerForm.get('name')?.value;
    this.usersCreate.secret = this.registerForm.get('password')?.value;
    this.usersCreate.email = this.registerForm.get('email')?.value;
  }

  createUser() {
    this.sendForm();
    this.usersService.create(this.usersCreate).subscribe(
      (data) => {
        console.log(data);
        this.usersService.showMessage('User Cadastrado!');
        this.router.navigate(['/users']);
      },

      (error) => console.log(error)
    );
    console.log(1);
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) return;

    this.createUser();
  }

  cancel() {
    console.log('cancelar criação de usuário');
    this.router.navigate(['/users']);
  }

  matcher = new MyErrorStateMatcher();
}

/*
/*Lógica pode ser inserida no service.ts
 Interface Gráfica, user-create.component*/
