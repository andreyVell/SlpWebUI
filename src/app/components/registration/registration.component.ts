import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import FormValidation from 'src/app/helpers/formValidation';

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

  constructor(private fb: FormBuilder) {}


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
      //authorize
      //this.registrationForm.value
    }
    else{
      FormValidation.validateAllFormFields(this.registrationForm);
    }
  }  

  hideShowPass(){
    this.inputPasswordTypeIsText ? this.inputPasswordType = 'password' : this.inputPasswordType = 'text';
    this.inputPasswordTypeIsText ? this.iconPasswordClass = 'fa fa-eye' : this.iconPasswordClass = 'fa fa-eye-slash';
    this.inputPasswordTypeIsText = !this.inputPasswordTypeIsText;
  }
}
