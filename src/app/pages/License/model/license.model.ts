import { Status } from 'src/app/shared/enum/enum';
import { Company, Device } from '../types/content';

export class LicenseModel {
  public device: Device;
  public company: Company;
  public licenseId: number;
  public status: Status;
  public licenseType: any;
  public initialDate: any;
  public expirationDate: any;
  public renewDate: string;
  public key: any;

  constructor(licenseModel: any) {
    this.device = licenseModel.device ? licenseModel.device : undefined;
    this.company = licenseModel.company ? licenseModel.company : undefined;
    this.licenseId = licenseModel.licenseId? licenseModel.licenseId
    : undefined;
    this.status = licenseModel.status ? licenseModel.status : undefined;
    this.licenseType = licenseModel.licenseType? licenseModel.licenseType: undefined;
    this.initialDate = licenseModel.initialDate? licenseModel.initialDate: undefined;
    this.expirationDate = licenseModel.expirationDate? licenseModel.expirationDate: undefined;
    this.renewDate = licenseModel.renewDate? licenseModel.renewDate: undefined;
    this.key = licenseModel.key ? licenseModel.key : undefined;
  }
}
