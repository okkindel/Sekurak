import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICredentials } from '../models';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private BASE_URL = environment.api_url;

  constructor(private http: HttpClient) { }


  register(email: string, password: string): Observable<any> {
    const pass =  Md5.hashStr(password);
    const url = `${this.BASE_URL}/register`;
    const body = { 'email': email, 'password': pass };
    return this.http.post<ICredentials>(url, body);
  }
}
