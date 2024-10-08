import { Injectable ,Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private inject:Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let authservice = this.inject.get(AuthService)
    let jwtToken = req.clone({
      setHeaders:{
        Authorization:'Bearer ' +authservice.getToken(),
      
      }
    });
    return next.handle(jwtToken);
  }
}
