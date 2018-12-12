import { Component } from '@angular/core';
import { AppState } from '../../../state/app/app.interface';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../../state/auth/reducers/';
import { Observable } from 'rxjs';
import { AdminService } from '../../services';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  email$: Observable<string>;
  fake: string

  constructor(
    private store: Store<AppState>,
    private service: AdminService) {
    this.email$ = this.store.pipe(select(fromAuth.getEmail));
  }

  post() {
    console.log(this.fake);
    this.service.getFake(this.fake).subscribe(res => console.log(res));
  }
}
