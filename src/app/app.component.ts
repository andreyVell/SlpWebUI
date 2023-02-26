import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { RegistrationService } from './services/registration.service';
import { CurrentUserService } from './services/current_user.service';
import { UserAuthenticationRequest } from './models/userAuthenticationRequest';
import { UserRegistrationRequest } from './models/userRegistrationRequest';
import { UserAuthenticationResponce } from './models/userAuthenticationResponce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SlpWebUI';
  authUser = new UserAuthenticationRequest();
  regUser = new UserRegistrationRequest();


  constructor (
    private authService: AuthenticationService,
    private registerService: RegistrationService,
    private currUser: CurrentUserService){}


  register(user: UserRegistrationRequest){
    this.registerService.register(user).subscribe();
  }

  login(user: UserAuthenticationRequest){
    this.authService.login(user).subscribe((tokenResponse : UserAuthenticationResponce) => {      
      localStorage.setItem('authToken', tokenResponse.token);
    });
  }

  getme(){
    //this.currUser.getCurrentUserId().subscribe((id:string)=>{
    //  console.log(id);
    //});
    this.currUser.getCurrentUserId().subscribe();
  }

}
