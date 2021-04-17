import { Status } from '../../../shared/enum/enum';

export class UserModel {
  userId: string;
  name: string;
  username: string;
  email: string;
  secret: string;
  status: Status;
}
