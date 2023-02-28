import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAuthenticationRequest } from '../models/Authentication/userAuthenticationRequest';
import { Observable } from 'rxjs/internal/Observable';
import { BackendApiEndpoints } from '../helpers/backendApiEndpoints';
import { UserAuthenticationResponce } from '../models/Authentication/userAuthenticationResponce';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  public login (user: UserAuthenticationRequest) : Observable<any>{    
    return this.http.post<UserAuthenticationResponce>(
      BackendApiEndpoints.user_authentication_endpoint, 
      user, { responseType: 'json' }
      );
  }
}
