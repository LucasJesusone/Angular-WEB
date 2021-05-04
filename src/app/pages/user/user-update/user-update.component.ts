import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../service/users.service';
import { Status } from 'src/app/shared/enum/enum';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { UserModel } from '../model/user.model';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css'],
})
export class UserUpdateComponent implements OnInit {
  updateUserInfo: FormGroup;

  enumStatus: any = Status; // Angular 11, necessário declarar como any, senão da erro.

  userUpdate: UserModel;

  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    public loaderService: LoaderService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.carregaFormulario()
    this.createForm()

   
  }


  carregaFormulario() {
// função para pegar os dados da api pelo ID e retornar no formulário de edição com o patchValue
const id = this.route.snapshot.paramMap.get('id');
this.userService.readById(id!).subscribe(userUpdate => {
this.userUpdate = userUpdate;
this.updateUserInfo.patchValue(this.userUpdate); // Pegar os valores da Model userUpdate usa o patchValue
});
  }


  createForm() {
 // Inserção de formulário com reactive Form.
 this.updateUserInfo = this.formBuilder.group({
  name: ['', [Validators.required, Validators.minLength(3)]],
  email: ['', [Validators.required, Validators.email]],
  status: [''],
});
  }

  public get f() {
    return this.updateUserInfo.controls;
  }

  // Com reactive Form, não usa o ([ngModel])="", então, ele não pega as informações de forma automatizada,
  // então, retorna ela no envio do formulário, nesse caso updateUser() {}
  sendChangedInfos() {
    this.userUpdate.name = this.updateUserInfo.get('name')?.value;
    this.userUpdate.email = this.updateUserInfo.get('email')?.value;
    this.userUpdate.status = this.updateUserInfo.get('status')?.value;
  }
  // Função de envio das informações atualizadas para o backend
  updateUser() {
    this.sendChangedInfos();
    this.userService.update(this.userUpdate).subscribe(
      (data) => {
        console.log(data);
        this.userService.showMessage('Usuário Alterado com sucesso.');
        this.router.navigate(['/users']);
      },
      (error) => console.log(error)
    );
  }

  
  // Enviar formulário
  onSubmit() {
    this.updateUser();
  }

  cancel() {
    this.router.navigate(['/users']);
  }
}
