import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import FormValidation from 'src/app/helpers/formValidation';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {   
     this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
     })
  }

  onSubmitLoginForm(){
    if (this.loginForm.valid){
      //authorize
      //this.loginForm.value
    }
    else{
      FormValidation.validateAllFormFields(this.loginForm);
    }
  }  

  hideShowPass(){
    this.inputPasswordTypeIsText ? this.inputPasswordType = 'password' : this.inputPasswordType = 'text';
    this.inputPasswordTypeIsText ? this.iconPasswordClass = 'fa fa-eye' : this.iconPasswordClass = 'fa fa-eye-slash';
    this.inputPasswordTypeIsText = !this.inputPasswordTypeIsText;
  }
}
