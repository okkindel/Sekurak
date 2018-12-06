import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services';
import { SnackbarService } from 'src/app/shared/services';
import { AppState } from '../../../state/app/app.interface';
import * as AuthActions from '../../../state/auth/actions/';
import { Store } from '@ngrx/store';
import { IElement } from 'src/app/list/models/IElement';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  list: IElement[] = [];

  constructor(
    private store: Store<AppState>,
    private snackBar: SnackbarService,
    private service: AdminService,
  ) { }

  ngOnInit() {
    this.update();
  }

  update() {
    this.service.list_items().subscribe(
      response => {
        this.list = response.list;
      },
      error => {
        if (error.status === 401) {
          this.store.dispatch(new AuthActions.Logout());
        }
        this.snackBar.showMessage(error.error.status || 'No server connection');
      });
  }

  postData(item: IElement) {
    this.service.accept_przelew(item).subscribe(
      response => {
        this.snackBar.showMessage("State changed");
        this.update();
      },
      error => {
        if (error.status === 401) {
          this.store.dispatch(new AuthActions.Logout());
        }
        this.snackBar.showMessage(error.error.status || 'No server connection');
      });
  }
}
