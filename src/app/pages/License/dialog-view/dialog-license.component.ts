import { Device } from './../model/device.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { deviceSystemType } from '../../../shared/enum/enum';
import { deviceLicense, osStatus } from 'src/app/shared/enum/enum';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-license',
  templateUrl: './dialog-license.component.html',
  styleUrls: ['./dialog-license.component.css'],
})
export class DialogLicenseComponent implements OnInit {
  @Input() deviceId: any;
  viewDevice: Device;
  form: FormGroup;
  enumStatus: any = osStatus;
  enumLicenses: any = deviceLicense;
  enumSystemType: any = deviceSystemType;
  constructor(
    protected ref: MatDialogRef<DialogLicenseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      deviceId: [this.deviceId],
    });
  }

  public get f() {
    return this.form.controls;
  }

  sendForm() {
    this.viewDevice.deviceId = this.data.deviceId;
  }

  dismiss() {
    this.ref.close(false);
    console.log(this.dismiss);
  }
}
