import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor (
    private router: Router,
    private authService: AuthenticationService
  ){}

  public isUserLoggedIn():boolean{
    return this.authService.isCurrentUserLoggedIn();
  }
}
