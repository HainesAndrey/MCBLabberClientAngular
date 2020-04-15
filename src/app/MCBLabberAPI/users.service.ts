import { Injectable } from '@angular/core';
import { MCBLabberAPIService } from './mcblabber-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends MCBLabberAPIService {

  constructor(http: HttpClient) {
    super(http);
   }
   
}
