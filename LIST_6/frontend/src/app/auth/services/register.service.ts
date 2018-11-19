import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegister } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private BASE_URL = environment.api_url;

  constructor(private http: HttpClient) { }


  register(username: string, email: string, password: string): Observable<any> {

    const url = `${this.BASE_URL}/register`;
    const body = { 'username': username, 'email': email, 'password': password };
    return this.http.post<IRegister>(url, body);
  }
}
