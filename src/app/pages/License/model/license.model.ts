import { Status } from 'src/app/shared/enum/enum';
import { Company } from '../types/content';
export class licenseModel {
  company: Company;
  licenseId: string;
  status: Status;
  licenseType: string;
  initialDate: Date;
  expirationDate: Date;
  renewDate: string;
}
