import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../state/auth/reducers/';
import { AppState } from 'src/app/state/app/app.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth/services';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  author: String;
  private BASE_URL = environment.api_url;

  constructor(
    private store: Store<AppState>,
    private http: HttpClient,
    private auth: AuthService) {
    this.store.pipe(select(fromAuth.getEmail)).subscribe(res => this.author = res);
  }

  list_items(): Observable<any> {
    const url = `${this.BASE_URL}/list`;
    const body = { 'author': this.author };
    const token = this.auth.getToken();
    const options = { headers: new HttpHeaders().set('Authorization', token) };
    return this.http.post(url, body, options);
  }
}
