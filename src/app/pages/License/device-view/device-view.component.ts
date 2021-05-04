import { Router } from '@angular/router';
import { DeviceModel } from '../model/device.model';
import { deviceSystemType, License, osStatus } from '../../../shared/enum/enum';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.css']
})
export class DeviceViewComponent implements OnInit {

  viewDevice: DeviceModel;

  form: FormGroup;

  enumStatus: any = osStatus;

  enumLicenses: any = License;

  enumSystemType: any = deviceSystemType;

  constructor(
    private route: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      description: [''],
      model: [''],
      systemType: [''],
    });
  }

  public get f() {
    return this.form.controls;
  }

  getForm() {
    
  }

  dismiss() {
   this.route.navigate(['/license'])
  }
}
