import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import FormValidation from 'src/app/helpers/formValidation';
import { ApiResponseError } from 'src/app/models/ApiResponceError';
import { UserAuthenticationRequest } from 'src/app/models/Authentication/userAuthenticationRequest';
import { UserAuthenticationResponce } from 'src/app/models/Authentication/userAuthenticationResponce';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  iconPasswordClass: string = 'fa fa-eye';  
  inputPasswordType: string = 'password';
  inputPasswordTypeIsText:  boolean = false;
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private toast: NgToastService,
    private router: Router) {}

  ngOnInit(): void {   
     this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
     })
  }

  onSubmitLoginForm(){
    if (this.loginForm.valid){
      const authUser = new UserAuthenticationRequest();
      authUser.Login = this.loginForm.value.username;
      authUser.Password = this.loginForm.value.password;
      this.login(authUser);            
    }
    else{
      FormValidation.validateAllFormFields(this.loginForm);
    }
  }  

  private login(user: UserAuthenticationRequest){
    this.authService.login(user).subscribe({
      next: (tokenResponse : UserAuthenticationResponce) => {      
        this.authService.postAuthTokenToLocalStorage(tokenResponse.token);
        this.router.navigate(['Dashboard']);
        this.toast.success({detail: 'Success!', summary: 'You have successfully logged in!', duration: 4000})
      },
      error: (err) =>{
        const apiError : ApiResponseError = err.error;   
        if (apiError.errorMessage){          
          this.toast.error({detail: 'Error!', summary: apiError.errorMessage, duration: 4000})
        }else{
          this.toast.error({detail: 'Error!', summary: "Something went wrong", duration: 4000})
        }    
      },
    });
  }


  hideShowPass(){
    this.inputPasswordTypeIsText ? this.inputPasswordType = 'password' : this.inputPasswordType = 'text';
    this.inputPasswordTypeIsText ? this.iconPasswordClass = 'fa fa-eye' : this.iconPasswordClass = 'fa fa-eye-slash';
    this.inputPasswordTypeIsText = !this.inputPasswordTypeIsText;
  }
}
