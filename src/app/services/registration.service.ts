import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegistrationRequest } from '../models/Registration/userRegistrationRequest';
import { Observable } from 'rxjs/internal/Observable';
import { BackendApiEndpoints } from '../helpers/backendApiEndpoints';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) { }

  public register (user: UserRegistrationRequest) : Observable<any>{
    return this.httpClient.post<any>(
      BackendApiEndpoints.user_registration_endpoint, 
      user
      );
  }
}
