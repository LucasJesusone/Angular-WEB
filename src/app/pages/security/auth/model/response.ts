import { UserDetails } from "src/app/pages/security/auth/model/user.model";


export class Response<T> {
    data: T;
    userDetails: UserDetails;
    errors: string[];
}