import { Component } from '@angular/core';
import { AppState } from '../../../state/app/app.interface';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../../state/auth/reducers/';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  username$: Observable<string>;

  constructor(
    private store: Store<AppState>) {
    this.username$ = this.store.pipe(select(fromAuth.getUsername));
  }
}
