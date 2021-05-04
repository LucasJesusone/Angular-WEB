
export class UserDetails {
  id: string;
  name?: string;
  username: string;
  password: string;
  token?: string;

  constructor(userDetails?: any, token?: any) {
    this.id = userDetails.id ? userDetails.id : undefined;
    this.name = userDetails.name ? this.convertName(userDetails.name) : undefined;
    this.username = userDetails.username ? userDetails.username : undefined;
    this.password = userDetails.password ? userDetails.password : undefined;
    this.token = userDetails.token ? userDetails.token : undefined;
  }

  private convertName(name: string): any {
    let n = name;
    name.replace(' ', '');
    name.substring;
  };
}
//iconUrl?: string;
//this.iconUrl = (comissao.icon)? this.getIcon(comissao.icon) : undefined;
