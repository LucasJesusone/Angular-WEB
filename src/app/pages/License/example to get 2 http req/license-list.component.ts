import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { License } from './../../../shared/enum/enum';
import { LicenseModel } from '../model/license.model';
import { DeviceService } from '../service/license.service';

@Component({
  selector: 'app-license-list',
  templateUrl: './license-list.component.html',
  styleUrls: ['./license-list.component.css'],
})
export class LicenseListComponent implements OnInit {
  licenseStatus: any = License
  filtrosListagem: FormGroup;
  license: MatTableDataSource<LicenseModel>;
  feedback: string = ''
  displayedColumns = [
    'identity',
    'description',
    'licenseType',
    'companyName',
    'actions',
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  data: any[];

  constructor(
    private form: FormBuilder,
    private route: Router,
    private deviceService: DeviceService
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.getDevice();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.filtrosListagem = this.form.group({
      identity: [''],
      licenseType: ['']
    });
  }

  getFilter() {
    this.feedback = ''
    const fil = this.filtrosListagem.getRawValue();
    console.log(fil);
    this.deviceService.getDeviceLicense(fil.identity, fil.licenseType).subscribe(data => {
      const response = [data];
      this.dataSource.data = response;
      this.dataSource.paginator = this.paginator;
    }, error => {
      this.feedback = error.error.message
    });
  }

  getDevice() {
    this.deviceService.getLicense().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  cancel() {
    this.route.navigate(['/license']);
  }
}
