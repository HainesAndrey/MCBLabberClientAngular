import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export abstract class MCBLabberAPIService {

  protected URL: string = 'https://localhost:2772';
  protected headers: HttpHeaders;

  constructor(private http: HttpClient) { }

  protected get(additURL: string){
      return this.http.get(this.URL + additURL, {headers: this.headers});
  }

  protected post(additURL: string, body: any){
    return this.http.post(this.URL + additURL, body);
  }
}
