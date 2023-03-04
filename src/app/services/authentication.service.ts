import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAuthenticationRequest } from '../models/Authentication/userAuthenticationRequest';
import { Observable } from 'rxjs/internal/Observable';
import { BackendApiEndpoints } from '../helpers/backendApiEndpoints';
import { UserAuthenticationResponce } from '../models/Authentication/userAuthenticationResponce';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authTokenName = 'authToken';

  constructor(
    private http: HttpClient,
    private router: Router) { }

  public login(user: UserAuthenticationRequest): Observable<any> {
    return this.http.post<UserAuthenticationResponce>(
      BackendApiEndpoints.user_authentication_endpoint,
      user, { responseType: 'json' }
    );
  }

  public logout(){
    localStorage.removeItem(this.authTokenName);
    this.router.navigate(['']);
  }  

  public postAuthTokenToLocalStorage(token: string): void {
    localStorage.setItem(this.authTokenName, token);
  }

  public getAuthTokenFromLocalStorage(): string | null {
    return localStorage.getItem(this.authTokenName);
  }

  public isCurrentUserLoggedIn(): boolean {
    //TODO проверить валидность токена (дату истечения)
    return !!localStorage.getItem(this.authTokenName);
  }
}
