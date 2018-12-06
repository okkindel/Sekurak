import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  message: String = '';
  private BASE_URL = environment.api_url;

  constructor(private http: HttpClient) { }

  resetPassword(email: string, pass: string) {
    const url = `${this.BASE_URL}/reset`;
    const password =  Md5.hashStr(pass);
    const body = { 'email': email, 'password': password };
    return this.http.post(url, body);
  }
}
