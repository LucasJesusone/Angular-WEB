import { ChangePasswordComponent } from '../change-password/change-password.component';
import { LoaderService } from 'src/app/loader/loader.service';
import { Status } from 'src/app/shared/enum/enum';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { UserModel } from '../model/user.model';
import { UsersService } from '../service/users.service';
import { UserRead2Item } from './user-read2-datasource'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-read2',
  templateUrl: './user-read2.component.html',
  styleUrls: ['./user-read2.component.css'],
})
export class UserRead2Component {
  enumStatus: any = Status;
  activePage = 0;
  totalElements: number = 0;

  /** Colunas mostradas na lista da tabela */
  usersRead: MatTableDataSource<UserModel[]>;
  displayedColumns = ['name', 'email', 'status', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatTable) table!: MatTable<UserRead2Item>;
  dataSource: MatTableDataSource<any>;

  constructor(
    private UsersService: UsersService,
    public loaderService: LoaderService,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getUser();
    this.dataSource.sort = this.sort;
  }

  applyFilter(filtervalue: string) {
    this.dataSource.filter = filtervalue.trim().toLocaleLowerCase();
  }

  getUser() {
    this.UsersService.getAllPaginate(this.activePage).subscribe((data) => {
      console.log(data)
      this.dataSource.data = data.content;
      this.totalElements = data.totalElements;
    });
  }

  onChangeGrid(event: PageEvent): void {
    this.activePage = event.pageIndex;
    this.getUser();
  }

  openChangePassword(userId: string) {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      data: {
        userId: userId,
        
      },
      
    });
      console.log(dialogRef)
  }
  
}
