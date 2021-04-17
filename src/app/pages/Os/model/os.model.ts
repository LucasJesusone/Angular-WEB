import { Client, Produtor } from '../../../pages/Os/types/content';
import { osStatus } from '../../../shared/enum/enum';
export class OsModel {
  codCliente: Client;
  codProdutor: Produtor;
  ie: string;
  os: string;
  codos: string;
  dataos: Date;
  navio: string;
  fardos: string;
  status: osStatus;
  safra: Date;
}
// Model das ordens de serviço
 