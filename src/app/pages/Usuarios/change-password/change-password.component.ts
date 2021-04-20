import { UserDetails } from 'src/app/pages/auth/model/user.model';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserModel } from './../model/user.model';
import { BehaviorSubject } from 'rxjs';
import { MustMatch } from 'src/app/shared/helpers/must-match.validator';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/pages/Usuarios/service/users.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { AfterViewInit, Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  @Input() userId: any
  submitted = false;
  form: FormGroup;
  //private currentUserSubject: BehaviorSubject<UserDetails>;
  changePassword: UserModel = new UserModel();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    protected ref: MatDialogRef<ChangePasswordComponent>
  ) {
    //this.currentUserSubject = new BehaviorSubject<UserDetails>(JSON.parse(localStorage.getItem('CurrentUser') || '{}'))
  }

  ngOnInit(): void {
    //const id = this.route.snapshot.paramMap.get('id');
    this.form = this.formBuilder.group(
      {
        userId: [this.userId],
        password: ['', [Validators.required, Validators.minLength(4)]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  public get f() {
    return this.form.controls;
  }

  sendForm() {
    this.changePassword.secret = this.form.get('password')?.value;
    this.changePassword.userId = this.data.userId;
  }

  changePass() {
    this.sendForm();
    console.log(this.data);
    console.log(this.changePassword);
    this.usersService.changePassword(this.changePassword).subscribe(
      (data) => {
        this.ref.close(true);
        this.usersService.showMessage('Usuário Alterado com sucesso.');
        this.router.navigate(['/users']);
      },
      (error) => console.log(error)
    );
    console.log(this.changePass);
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) return;


    this.changePass();
  }

  dismiss() {
    this.ref.close(false);
  }

  matcher = new MyErrorStateMatcher();
}
