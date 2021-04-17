import { OsModel } from '../model/os.model';
import { osStatus } from '../../../shared/enum/enum';

import { OsService } from '../service/os.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-os-view',
  templateUrl: './os-view.component.html',
  styleUrls: ['./os-view.component.css'],
})
export class OsViewComponent implements OnInit {
  ieInfos: FormGroup;

  enumStatus: any = osStatus;
  osView: OsModel;
  title = 'Visualizar Instrução de Embarque';

  constructor(
    private osService: OsService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    const os = this.route.snapshot.paramMap.get('os');
    this.osService.readByCodos(os!).subscribe((osUpdate) => {
      this.osView = osUpdate;
      this.ieInfos.patchValue(this.osView);
      this.ieInfos.controls['razao'].setValue(this.osView.codCliente.razao); // Inserção manual dos itens contidos na interface.
      this.ieInfos.controls['tipoEntidade'].setValue(
        this.osView.codCliente.tipoEntidade
      ); // Inserção manual dos itens contidos na interface.
    });
 
    // Método de formulário reativo.
    this.ieInfos = this.formBuilder.group({
      os: [{ value: '', disabled: true }],
      ie: [{ value: '', disabled: true }],
      razao: [{ value: '', disabled: true }],
      status: [{ value: '', disabled: true }],
      navio: [{ value: '', disabled: true }],
      fardos: [{ value: '', disabled: true }],
      dataos: [{ value: '', disabled: true }],
      safra: [{ value: '', disabled: true }],
      tipoEntidade: [{ value: '', disabled: true }],
    });
  }

  /*  public get f() {
    return this.viewOsInfo.controls;
  }
*/

  return() {
    this.router.navigate(['/os']);
  }
}
