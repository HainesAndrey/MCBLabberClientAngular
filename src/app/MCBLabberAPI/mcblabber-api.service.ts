import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { JWT } from '../auth/jwt';

@Injectable({
  providedIn: 'root'
})
export abstract class MCBLabberAPIService {

  protected URL: string = 'https://localhost:2772';
  protected headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
    let jwt: JWT = JSON.parse(localStorage.getItem('JWT'));
    this.headers.set('Authorization', jwt?.access_token);
   }

  protected get(additURL: string){
    return this.http.get(this.URL + additURL, {headers: this.headers});
  }

  protected post(additURL: string, body: any){
    return this.http.post(this.URL + additURL, body, {headers: this.headers});
  }
}
