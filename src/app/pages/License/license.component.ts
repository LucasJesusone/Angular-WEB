import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';

import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FormGroup } from '@angular/forms';
import { DeviceService } from './service/device.service';
import { DialogLicenseComponent } from './dialog-view/dialog-license.component';
import { MatTableDataSource } from '@angular/material/table';

import { Status } from './../../shared/enum/enum';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Device } from './model/device.model';
@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css'],
})
export class LicenseComponent implements OnInit {
  totalElements: number = 0;
  activePage = 0;
  form: FormGroup;
  device: MatTableDataSource<Device>;
  enumStatus: any = Status;

  displayedColumns = ['identity', 'company', 'status', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort; // static diz que o elemento já está no template
  dataSource: MatTableDataSource<any>;

  constructor(public dialog: MatDialog, private deviceService: DeviceService) {
    this.dataSource = new MatTableDataSource();
  }

  getDevice() {
    this.deviceService.getDevices(this.activePage).subscribe((data) => {
      this.dataSource.data = data.content;
      this.totalElements = data.totalElements;
    });
  }

  onChangePage(event: PageEvent): void {
    this.activePage = event.pageIndex;
    this.getDevice();
  }

  openDialogView(deviceId: string) {
    const dialogRef = this.dialog.open(DialogLicenseComponent, {
      data: {
        deviceId: deviceId,
      },
    });
    console.log(dialogRef);
  }

  openDialogEdit() {
    this.dialog.open(DialogEditComponent);
  }

  openDialogDelete() {
    this.dialog.open(DialogDeleteComponent);
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }
}
