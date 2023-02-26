import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegistrationDto } from '../models/userRegistrationDto';
import { Observable } from 'rxjs/internal/Observable';
import { BackendApiEndpoints } from '../endpoint_helpers/backendApiEndpoints';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  public register (user: UserRegistrationDto) : Observable<any>{
    return this.http.post<any>(
      BackendApiEndpoints.user_registration_endpoint, 
      user
      );
  }
}
