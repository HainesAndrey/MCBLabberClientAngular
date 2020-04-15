import { Injectable } from '@angular/core';
import { MCBLabberAPIService } from './mcblabber-api.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { JWT } from '../auth/jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends MCBLabberAPIService {

  constructor(http: HttpClient, private router: Router) { 
    super(http);
    this.URL += '/auth';
  }

  get hasToken(): boolean {
    return localStorage.getItem('JWT') !== null;
  }

  getToken(user: User) {
    this.post('/gettoken', user).subscribe(
      (resp: JWT) => {
        localStorage.setItem('JWT', JSON.stringify(resp));
      }
    );
  }

  logout() {
    localStorage.removeItem('JWT');
  }
}
