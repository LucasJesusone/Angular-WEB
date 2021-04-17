export interface Content {
  codos: string;
  os: string;
  dataos: Date;
  codCliente: string;
  codentidade: number;
  razao: string;
  fantasia: string;
  tipoEntidade: string;
  codProdutor: string;
  status: string;
  navio: string;
  safra: Date;
  ie: string;
  fardos: string;
}

// Model do content que vem do JSON de paginação da API.
export interface Client {
  codentidade: number;
  razao: string;
  fantasia: string;
  tipoEntidade: string;
}

export interface Produtor {
  codentidade: number;
  razao: string;
  fantasia: string;
  tipoEntidade: string;
}
