import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  message: String = '';
  private BASE_URL = environment.api_url;

  constructor(private http: HttpClient) { }

  resetPassword(email: String, pass: String) {
    const url = `${this.BASE_URL}/reset`;
    const body = { 'email': email, 'password': pass };
    return this.http.post(url, body);
  }
}
