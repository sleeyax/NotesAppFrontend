export class User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  token?: string;

  constructor(email: string, firstName: string, lastName: string, password: string, token?: string)
  {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.token = token;
  }
}
