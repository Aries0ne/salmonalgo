import { HttpBackend, HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {Observable} from 'rxjs';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly url: string = "https://aa80-182-48-231-27.ngrok-free.app";
 
  constructor(@Inject(PLATFORM_ID) private platformId: Object,private http:HttpClient, private handler:HttpBackend) { this.http = new HttpClient(handler) }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null;
  }

  login(data: any): Observable<any>{
    return this.http.post(`${this.url}/auth/login/`,data);
  }

  signup(data:any):Observable<any>{
    return this.http.post(`${this.url}/auth/register/`,data);
  }
  isLoggedIn(){
    return localStorage.getItem('user')!=null;
  }


}
