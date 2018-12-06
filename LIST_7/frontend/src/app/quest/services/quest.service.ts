import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as fromAuth from '../../state/auth/reducers/';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app/app.interface';
import { AuthService } from 'src/app/auth/services';

@Injectable({
  providedIn: 'root'
})
export class QuestService {

  author: String;
  private BASE_URL = environment.api_url;

  constructor(private store: Store<AppState>,
    private router: Router,
    private http: HttpClient,
    private auth: AuthService) {
    this.store.pipe(select(fromAuth.getEmail)).subscribe(res => this.author = res);
  }

  message: any;

  showInfo(msg: any) {
    this.message = msg;
    this.router.navigate(['summary']);
  }

  submit(from: String, to: String, account: String, ammount: String): Observable<any> {
    const url = `${this.BASE_URL}/submit`;
    const body = { 'from': from, 'to': to, 'account': account, 'ammount': ammount };
    const token = this.auth.getToken();
    const options = { headers: new HttpHeaders().set('Authorization', token) };
    return this.http.post(url, body, options);
  }

  summary(id: number): Observable<any> {
    const url = `${this.BASE_URL}/summary`;
    const body = { 'author': this.author, 'id': id };
    const token = this.auth.getToken();
    const options = { headers: new HttpHeaders().set('Authorization', token) };
    return this.http.post(url, body, options);
  }
}
