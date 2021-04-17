import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/pages/Usuarios/service/users.service';

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
