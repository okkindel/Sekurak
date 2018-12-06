import { Component, OnInit } from '@angular/core';
import { IElement } from '../../models/IElement';
import { ListService } from '../../services/list.service';
import { SnackbarService } from 'src/app/shared/services';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app/app.interface';
import * as AuthActions from '../../../state/auth/actions/';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})

export class ContainerComponent implements OnInit {

  constructor(
    private service: ListService,
    private snackBar: SnackbarService,
    private store: Store<AppState>,
  ) { }

  list: IElement[] = [];

  ngOnInit() {
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
}
