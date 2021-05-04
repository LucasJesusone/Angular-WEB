import { ActivatedRoute } from '@angular/router';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DeviceService } from '../service/license.service';

import { MatTableDataSource } from '@angular/material/table';

import { Status } from '../../../shared/enum/enum';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeviceModel } from '../model/device.model';
@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css'],
})
export class LicenseComponent implements OnInit {
  totalElements: number = 0;
  activePage = 0;
  device: MatTableDataSource<DeviceModel>;
  enumStatus: any = Status;
  filtrosListagem: FormGroup;
  displayedColumns = ['identity', 'company', 'status', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort; // static diz que o elemento já está no template
  dataSource: MatTableDataSource<any>;

  constructor(
    public dialog: MatDialog,
    private deviceService: DeviceService,
    private form: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.getDevice();

    this.dataSource.sort = this.sort;

    this.filtrosListagem = this.form.group({
      identity: [''],
    });
  }


  getFilter() {
    const fil = this.filtrosListagem.getRawValue();
    console.log(fil);
    this.deviceService.filterByIdentity(fil.identity).subscribe(data => {
      const response = [data];
      this.dataSource.data = response;
      this.dataSource.paginator = this.paginator;
    });
  }

  clearFilter() {
      this.filtrosListagem.reset();
      this.getDevice()
  }

  getDevice() {
    this.deviceService.getDevicesPaginate(this.activePage).subscribe(data => {
      this.dataSource.data = data.content;
      this.totalElements = data.totalElements;
    });
  }

  

  onChangePage(event: PageEvent): void {
    this.activePage = event.pageIndex;
    this.getDevice();
  }

  openDialogDelete(deviceId: string) {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: {
        deviceId: deviceId,
      },
    });
    console.log(dialogRef);
  }
}
