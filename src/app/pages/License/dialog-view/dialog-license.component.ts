import { deviceSystemType } from '../../../shared/enum/enum';
import { deviceLicense, osStatus } from 'src/app/shared/enum/enum';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-license',
  templateUrl: './dialog-license.component.html',
  styleUrls: ['./dialog-license.component.css'],
})
export class DialogLicenseComponent implements OnInit {
  enumStatus: any = osStatus;
  enumLicenses: any = deviceLicense;
  enumSystemType: any = deviceSystemType;
  constructor(protected ref: MatDialogRef<DialogLicenseComponent>) {}

  ngOnInit(): void {}

  dismiss() {
    this.ref.close(false);
    console.log(this.dismiss);
  }
}
