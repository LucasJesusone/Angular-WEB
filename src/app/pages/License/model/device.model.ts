
import { deviceSystemType, Status } from 'src/app/shared/enum/enum';
import { Company } from '../types/content';

export class DeviceModel {
  company: Company;
  deviceId: string;
  description: string;
  model: string;
  identity: string;
  systemType: deviceSystemType;
  status: Status;
}
