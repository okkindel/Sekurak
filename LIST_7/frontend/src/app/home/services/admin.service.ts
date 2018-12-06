import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../state/auth/reducers/';
import { AppState } from 'src/app/state/app/app.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth/services';
import { IElement } from 'src/app/list/models/IElement';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  author: String;
  private BASE_URL = environment.api_url;

  constructor(
    private store: Store<AppState>,
    private http: HttpClient,
    private auth: AuthService) {
    this.store.pipe(select(fromAuth.getEmail)).subscribe(res => this.author = res);
  }

  list_items(): Observable<any> {
    const url = `${this.BASE_URL}/list-admin`;
    const body = { 'author': this.author };
    const token = this.auth.getToken();
    const options = { headers: new HttpHeaders().set('Authorization', token) };
    return this.http.post(url, body, options);
  }

  accept_przelew(id: IElement): Observable<any> {
    const url = `${this.BASE_URL}/change-accepted`;
    const body = { 'author': this.author, 'id': id };
    const token = this.auth.getToken();
    const options = { headers: new HttpHeaders().set('Authorization', token) };
    return this.http.post(url, body, options);
  }
}
