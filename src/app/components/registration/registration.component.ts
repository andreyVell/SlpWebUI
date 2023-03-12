import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import FormValidation from 'src/app/helpers/formValidation';
import { ApiResponseError } from 'src/app/models/ApiResponceError';
import { UserRegistrationRequest } from 'src/app/models/Registration/userRegistrationRequest';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  iconPasswordClass: string = 'fa fa-eye';  
  inputPasswordType: string = 'password';
  inputPasswordTypeIsText:  boolean = false;
  registrationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registerService: RegistrationService,
    private toast: NgToastService) {}


  ngOnInit(): void {   
    this.registrationForm = this.fb.group({
      firstname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
     })
  }

  onSubmitRegistrationForm(){
    if (this.registrationForm.valid){
      const regUser = new UserRegistrationRequest();
      regUser.FirstName = this.registrationForm.value.firstname;
      regUser.Login = this.registrationForm.value.username;
      regUser.Password = this.registrationForm.value.password;
      this.register(regUser);
      
    }
    else{
      FormValidation.validateAllFormFields(this.registrationForm);
    }
  }  

  private register(user: UserRegistrationRequest){
    this.registerService.register(user).subscribe({
      next: (response) => {     
        this.toast.success({detail: 'Success!', summary: 'The account has been successfully registered!', duration: 4000})
      }
    });
  }

  hideShowPass(){
    this.inputPasswordTypeIsText ? this.inputPasswordType = 'password' : this.inputPasswordType = 'text';
    this.inputPasswordTypeIsText ? this.iconPasswordClass = 'fa fa-eye' : this.iconPasswordClass = 'fa fa-eye-slash';
    this.inputPasswordTypeIsText = !this.inputPasswordTypeIsText;
  }
}
