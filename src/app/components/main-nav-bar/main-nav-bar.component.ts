import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.css']
})
export class MainNavBarComponent {
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
