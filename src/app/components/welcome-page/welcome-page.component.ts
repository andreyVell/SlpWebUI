import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
  constructor (
    private router: Router,
    private authService: AuthenticationService
  ){}

  public toLoginPage(){
    this.router.navigate(['/Login'])
  }

  public toRegisterPage(){
    this.router.navigate(['/Register'])
  }

  public isUserLoggedIn():boolean{
    return this.authService.isCurrentUserLoggedIn();
  }

  public logOut(){
    this.authService.logout();
  }
}
