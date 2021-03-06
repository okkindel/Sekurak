import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models';
import { environment } from '../../../environments/environment';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = environment.api_url;

  constructor(private http: HttpClient) { }

  getToken(): string {
    return localStorage.getItem('token');
  }

  login(email: string, password: string): Observable<any> {
    const pass =  Md5.hashStr(password);
    const url = `${this.BASE_URL}/login`;
    const body = { 'email': email, 'password': pass };
    return this.http.post<IUser>(url, body);
  }
}
