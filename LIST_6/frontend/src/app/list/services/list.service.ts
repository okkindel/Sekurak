import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../state/auth/reducers/';
import { AppState } from 'src/app/state/app/app.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  author: String;
  private BASE_URL = environment.api_url;

  constructor(private store: Store<AppState>, private http: HttpClient) {
    this.store.pipe(select(fromAuth.getEmail)).subscribe(res => this.author = res);
  }

  list_items(): Observable<any> {
    const url = `${this.BASE_URL}/list`;
    const body = { 'author': this.author };
    return this.http.post(url, body);
  }
}
