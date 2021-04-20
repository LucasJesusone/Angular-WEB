import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { osStatus } from '../../shared/enum/enum';
import { MatTableDataSource } from '@angular/material/table';
import { OsService } from './service/os.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { OsModel } from './model/os.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.css'],
})
export class OsComponent implements OnInit {
  totalElements: number = 0;
  paginaAtiva = 0;
  title = 'Filtro de Consulta';
  formFilter: FormGroup;

  osList: MatTableDataSource<OsModel[]>;

  enumStatus: any = osStatus;



  // displayedFilterColumns: string[] = [
  //   'filter-os',
  //   'filter-status',
  //   'filter-ie',
  // ];



  // Método que mostra as colunas na tabela conforme adicionado dentro de [].
  displayedColumns = ['ie', 'os', 'status', 'actions'];
  // ViewChild, função de paginação e sorting.
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort; // static diz que o elemento já está no template
  dataSource: MatTableDataSource<any>;
  form: any;

  constructor(private osService: OsService, private formBuilder: FormBuilder) {
    this.dataSource = new MatTableDataSource();
  }

  // Função nativa do angular pra trazer os dados quando a página inicia.
  ngOnInit(): void {
    this.getOs();
    this.dataSource.sort = this.sort;

      this.formFilter = this.formBuilder.group({
      filteros: [null],
      filterstatus: [''],
      filterie: [null],
    });
  }

  applyFilter(filtervalue: string) {
    this.dataSource.filter = filtervalue.trim().toLocaleLowerCase();
  }

  // Função que busca os dados da página no serviço criado; this.paginaAtiva vem do evento que faz a mudança da página.
  getOs() {
    this.osService.getAllPaginate(this.paginaAtiva).subscribe(data => {
      this.dataSource.data = data.content; // Adicionado content tipo T dentro do model para nao permanecer com any no data. ex: ((data: any) =>)
      this.totalElements = data.totalElements; // totalElements, total de itens que a API retorna.
    });
  }

  // Evento que faz a mudança de página ao clicar em next;
  onChangeGrid(event: PageEvent): void {
    this.paginaAtiva = event.pageIndex;
    this.getOs();
  }
}
