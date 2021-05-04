
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD:src/app/pages/user/user-list/users.component.ts
import { UsersService } from 'src/app/pages/user/service/users.service';
=======
import { UsersService } from "../service/users.service"
>>>>>>> da3c7bbfbbcb673e0f64e39984ed79699f2b3cb3:src/app/pages/Usuarios/users/users.component.ts

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: Array<any>;

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  navigateToUserCreate(): void {
    this.router.navigate(['/users/create']);
  }
}
