import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly url: string = "https://aa80-182-48-231-27.ngrok-free.app";

  constructor(private http:HttpClient) { }

  

  loaduser(){
    
    return this.http.get(`${this.url}/auth/user/`)
  }
}
