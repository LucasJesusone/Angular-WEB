import { deviceSystemType } from '../../../shared/enum/enum';
export interface Company {
  companyId: number;
  name: string;
}

export interface Device {
    deviceId: number;
    description: string;
    identity: string;
    model: string;
    systemType: deviceSystemType
}
