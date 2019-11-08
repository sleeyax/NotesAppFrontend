export class User {
  userID: number;
  email: string;
  password: string;
  username: string;
  token?: string;

  constructor(userID: number, email: string, password: string, username: string, token?: string)
  {
    this.userID = userID;
    this.email = email;
    this.password = password;
    this.username = username;
    this.token = token;
  }
}
