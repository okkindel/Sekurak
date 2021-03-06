import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { QuestService } from '../../services';
import * as fromThemes from '../../../state/themes/reducers';
import { AppState } from 'src/app/state/app/app.interface';
import * as fromAuth from '../../../state/auth/reducers/';
import { InfoService, SnackbarService } from 'src/app/shared/services';
import * as AuthActions from '../../../state/auth/actions/';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  message: any;
  theme: String;
  author: String;

  constructor(
    private service: QuestService,
    private store: Store<fromThemes.IState>,
    private root: Store<AppState>,
    private snackBar: SnackbarService,
    private infoSevice: InfoService) {
    this.root.pipe(select(fromAuth.getEmail)).subscribe(res => this.author = res);
  }

  ngOnInit(): void {
    this.message = this.service.message;
    this.store.pipe(select(fromThemes.getTheme)).subscribe(res => this.theme = res);
  }

  send() {
    this.service.submit(this.author, this.message.name, this.message.number, this.message.ammount)
      .subscribe(
        response => {
          this.infoSevice.showInfo('You were succesfully przlewed.');
        },
        error => {
          if (error.status === 401) {
            this.store.dispatch(new AuthActions.Logout());
          }
          this.snackBar.showMessage(error.error.status || 'No server connection');
        });
  }

  fake() {
    this.service.submit(this.author, this.message.name, 'fake_acc_nr', this.message.ammount)
      .subscribe(
        response => {
          this.infoSevice.showInfo('You were succesfully przlewed.');
        },
        error => {
          if (error.status === 401) {
            this.store.dispatch(new AuthActions.Logout());
          }
          this.snackBar.showMessage(error.error.status || 'No server connection');
        });
  }
}
