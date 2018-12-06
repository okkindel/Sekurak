import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestService } from '../../services';
import { SnackbarService } from 'src/app/shared/services';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app/app.interface';
import * as AuthActions from '../../../state/auth/actions/';

@Component({
  selector: 'app-quest-details',
  templateUrl: './quest-details.component.html',
  styleUrls: ['./quest-details.component.scss']
})
export class QuestDetailsComponent implements OnInit {

  data: any = {};

  constructor(
    private route: ActivatedRoute,
    private service: QuestService,
    private snackBar: SnackbarService,
    private store: Store<AppState>, ) { }

  ngOnInit(): void {
    this.service.summary(this.getQuest())
      .subscribe(
        res => {
          this.data = res.data;
          this.data.accepted = Boolean(this.data.accepted)
        },
        error => {
          if (error.status === 401) {
            this.store.dispatch(new AuthActions.Logout());
          }
          this.snackBar.showMessage(error.error.status || 'No server connection');
        });
  }

  getQuest(): number {
    const id = + this.route.snapshot.paramMap.get('id');
    return id;
  }
}
