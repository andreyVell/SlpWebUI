import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (
    private authenticationService: AuthenticationService,
    private router: Router,
    private toast: NgToastService){

  }
  canActivate() : boolean {
    if (this.authenticationService.isCurrentUserLoggedIn()){
      return true;
    }
    else{
      this.toast.error({detail: 'Error!', summary: "Please sign in", duration: 4000})
      this.router.navigate(['']);
      return false;
    }
  }
  
}
