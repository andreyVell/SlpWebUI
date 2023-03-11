import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BackendApiEndpoints } from '../helpers/backendApiEndpoints';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  constructor(private httpClient: HttpClient) { }

  public getCurrentUserId () : Observable<any>{
    return this.httpClient.get(
      BackendApiEndpoints.user_getCrrentUserId_endpoint,
      { responseType: 'text'},);
  }
}