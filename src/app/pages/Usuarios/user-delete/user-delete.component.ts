import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';
import { LoaderService } from 'src/app/loader/loader.service';
import { UserModel } from '../model/user.model';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css'],
})
export class UserDeleteComponent implements OnInit {
  userDelete: UserModel;

  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    public loaderService: LoaderService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.readById(id!).subscribe((userDelete) => {
      this.userDelete = userDelete;
    });
  }

  delete(): void {
    this.userService.delete(`${this.userDelete.userId}`).subscribe(() => {
      this.userService.showMessage('Usuário Excluído');
      this.router.navigate(['/users']);
    });
  }
  cancel(): void {
    this.router.navigate(['/users']);
  }

  /*
  accepct() {
    this.ref.close(true)
  }

  dismiss() {
    this.ref.close(false)
  }  
  */
}
