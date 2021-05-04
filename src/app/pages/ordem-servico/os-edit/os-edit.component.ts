import { OsModel } from '../model/os.model';
import { Router, ActivatedRoute } from '@angular/router';
import { OsService } from '../service/os.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { osStatus } from 'src/app/shared/enum/enum';

@Component({
  selector: 'app-os-edit',
  templateUrl: './os-edit.component.html',
  styleUrls: ['./os-edit.component.css'],
})
export class OsEditComponent implements OnInit {
  title = 'Editar Instrução de Embarque';
  updateOsInfo: FormGroup;

  enumStatus: any = osStatus; // Angular 11, necessário declarar como any, senão da erro.

  osUpdate: OsModel;

  constructor(
    private osService: OsService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.carregaFormulario()
    this.createForm()
  }

  carregaFormulario() {
    const os = this.route.snapshot.paramMap.get('os');
    console.log(os)
    this.osService.readByCodos(os!).subscribe((osUpdate) => {
      this.osUpdate = osUpdate;
      this.updateOsInfo.patchValue(this.osUpdate);
    });
  }


  createForm() {
    this.updateOsInfo = this.formBuilder.group({
      os: [''],
      status: { value: '', disabled: true },
      navio: [''],
      fardos: [''],
    });
  }

  public get f() {
    return this.updateOsInfo.controls;
  }

  sendChangedInfo() {
    this.osUpdate.os = this.updateOsInfo.get('os')?.value;
    this.osUpdate.status = this.updateOsInfo.get('status')?.value;
    this.osUpdate.navio = this.updateOsInfo.get('navio')?.value;
    this.osUpdate.fardos = this.updateOsInfo.get('fardos')?.value;
  }

  updateOs() {
    this.sendChangedInfo();
    this.osService.updateoS(this.osUpdate).subscribe(
      (data) => {
        console.log(data);
        this.osService.showMessage('Ordem de Serviço alterada com sucesso.');
        this.router.navigate(['/os']);
      },
      (err) => console.log(err)
    );
  }

  onSubmit() {
    this.updateOs();
  }

  cancel() {
    this.router.navigate(['/os']);
  }
}
