import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAuthenticationDto } from '../models/userAuthenticationDto';
import { Observable } from 'rxjs/internal/Observable';
import { BackendApiEndpoints } from '../endpoint_helpers/backendApiEndpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  public login (user: UserAuthenticationDto) : Observable<any>{
    return this.http.post<any>(
      BackendApiEndpoints.user_authentication_endpoint, 
      user
      );
  }
}
