import { osStatus } from 'src/app/shared/enum/enum';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { LicenseModel } from '../model/license.model';
import { MatTableDataSource } from '@angular/material/table';
import { deviceSystemType, Status, License } from '../../../shared/enum/enum';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DeviceService } from '../service/license.service';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.css'],
})
export class DeviceEditComponent implements OnInit {
  deviceSystemStatus: any = deviceSystemType;
  licenseType: any = License;
  deviceStatus: any = Status;

  license: MatTableDataSource<LicenseModel[]>;
  form: FormGroup;

  editDevice: LicenseModel;



  listLicense: any = []
  initialDate: any = [];
  expirationDate: any = [];
  key: any = [];

  displayedColumns = ['licenseType']

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource: MatTableDataSource<any>;

  constructor(
    private formBuilder: FormBuilder,
    private deviceService: DeviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.dataSource = new MatTableDataSource();
  }


  ngOnInit(): void {


    // Pegar Dispositivo pelo identity
    const identity = this.route.snapshot.paramMap.get('identity');
    this.deviceService.filterByIdentity(identity!).subscribe(editDevice => {
      this.editDevice = editDevice;
      this.form.patchValue(this.editDevice);
      this.form.controls['company'].setValue(this.editDevice.company.name);
    });

    this.getLicenseDevice(identity!);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // this.getInitialDate(identity!)


    this.form = this.formBuilder.group({
      company: [''],
      identity: [''],
      description: [''],
      model: [''],
      systemType: [''],
      status: [''],
    });

    console.log(this.form);
  }

  public get f() {
    return this.form.controls;
  }

  getLicenseDevice(listLicense: string) {
    this.deviceService.getLicense().subscribe(data => {
      data.forEach((dataresult, index) => {
        if (dataresult.device.identity == `${listLicense}`) {
            this.listLicense.push([index = dataresult.licenseType]);

          this.dataSource.data = this.listLicense;
          this.dataSource.paginator = this.paginator
        }
        // if (dataresult.device.identity == `${initialDate}`) {
        //   this.initialDate.push([index = dataresult.initialDate])

        //   this.dataSource.data = this.initialDate;
        //   this.dataSource.paginator = this.paginator
        // }
        // if (dataresult.device.identity == `${expirationDate}`) {
        //   this.expirationDate.push([index = dataresult.expirationDate])

        //   this.dataSource.data = this.expirationDate;
        //   this.dataSource.paginator = this.paginator
        // }
        // // if (dataresult.device.identity == `${key}`) {
        // //   this.key.push([[index = dataresult.key] ? 'Sim' : 'Não'])

        // //   this.dataSource.data = this.key;
        // //   this.dataSource.paginator = this.paginator

        // // }
      });

      console.log(this.listLicense);

      console.log(this.initialDate)

      console.log(this.expirationDate)

      console.log(this.key)
    });
  }



  // getInitialDate(initialDate: string) {
  //   this.deviceService.getLicense().subscribe(data => {
  //     data.forEach((dataresult) => {
  //       if (dataresult.licenseType == `${initialDate}`) {
  //         this.listLicense.push(dataresult.licenseType);

  //         this.dataSource.data = this.listLicense;
  //         this.dataSource.paginator = this.paginator;
  //         this.dataSource.sort = this.sort;
  //       }
  //     });
  //     console.log(this.initialDate);
  //   });


  // }


  // getForm(){
  //   this.editDevice.licenseType = this.form.get('licenseType')?.value;
  //   this.editDevice.company.name = this.form.get('company')?.value;
  //   this.editDevice.device.identity = this.form.get('identity')?.value;
  //   this.editDevice.device.description = this.form.get('description')?.value;
  //   this.editDevice.device.model = this.form.get('model')?.value;
  //   this.editDevice.device.systemType = this.form.get('systemType')?.value;
  //   this.editDevice.status = this.form.get('status')?.value;
  // }

  editDeviceForm() {
    console.log(this.editDeviceForm);
    // this.getForm();
    this.deviceService.devices(this.editDevice).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => console.log(err)
    );

    console.log(this.editDeviceForm);
  }

  onSubmit() {
    this.editDeviceForm();
  }

  cancel() {
    this.router.navigate(['/license']);
  }


}
