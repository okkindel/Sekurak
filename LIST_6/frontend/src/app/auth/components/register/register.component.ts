import { Component, Output, EventEmitter } from '@angular/core';
import { IRegister } from '../../models';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  re_password: String = '';

  @Output() register: EventEmitter<IRegister> = new EventEmitter();

  public credentials: IRegister = {
    username: '',
    email: '',
    password: '',
  };

  validate_password = () => this.re_password === this.credentials.password;

  validate = () => this.validate_password()
    && this.credentials.username !== ''
    && this.credentials.email !== ''
    && this.credentials.password !== ''

}
