import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  signup(user: any) {
    return this.httpClient.post('https://localhost:7002/api/Auth/signup', user);
  }

  signin(user: any) {
    return this.httpClient.post('https://localhost:7002/api/Auth/signin', user);
  }
}
