import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Status, deviceSystemType } from '../../../shared/enum/enum';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DeviceModel } from '../model/device.model';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { DeviceService } from '../service/license.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css'],
})
export class DialogDeleteComponent implements OnInit {
  @Input() deviceId: any;
  deviceSystemStatus: any = deviceSystemType;
  deviceStatus: any = Status;

  form: FormGroup;
  editDevice: DeviceModel;

  constructor(
    protected ref: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private deviceService: DeviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      deviceId: [this.deviceId],
      description: [''],
      model: [''],
      systemType: [''],
      status: [''],
    });
  }

  public get f() {
    return this.form.controls;
  }

  getForm() {
    console.log(this.getForm);
    this.editDevice.description = this.form.get('description')?.value;
    this.editDevice.model = this.form.get('model')?.value;
    this.editDevice.systemType = this.form.get('systemType')?.value;
    this.editDevice.status = this.form.get('status')?.value;
    this.editDevice.deviceId = this.data.deviceId;
  }

  editDeviceForm() {
    console.log(2);
    this.getForm();
    console.log(3);
    this.deviceService.updateDevices(this.editDevice).subscribe(
      (data) => {
        console.log(data)
      },
      (err) => console.log(err)
    );

    console.log(this.editDeviceForm);
  }

  onSubmit() {
    if (this.form.invalid) return;

    this.editDeviceForm();
  }

  dismiss() {
    this.ref.close(false);
  }
}
