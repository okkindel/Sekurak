import { Component } from '@angular/core';
import { ICredentials } from '../../models';
import { RegisterService } from '../../services';
import { SnackbarService } from '../../../shared/services';
import { InfoService } from 'src/app/shared/services/';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  constructor(
    private service: RegisterService,
    private snackBar: SnackbarService,
    private infoSevice: InfoService) { }

  register(credentials: ICredentials) {
    this.service.register(credentials.email, credentials.password)
      .subscribe(
        response => {
          this.infoSevice.showInfo('You were successfully registered.');
        },
        error => this.snackBar.showMessage(error.error.status || 'No server connection'));
  }
}