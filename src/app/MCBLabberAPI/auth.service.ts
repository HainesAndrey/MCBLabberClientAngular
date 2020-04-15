import { Injectable } from '@angular/core';
import { MCBLabberAPIService } from './mcblabber-api.service';
import { HttpClient, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';

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

  gettoken(user: User) {
    let msg;
    this.post('/gettoken', user).subscribe(
      (resp: any) => {
        localStorage.setItem('JWT', JSON.stringify(resp));
      },
      (error: any) => {
        msg = error;
      }
    );
    return msg;
  }

  logout() {
    localStorage.removeItem('JWT');
  }

}
