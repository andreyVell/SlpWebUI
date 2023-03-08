import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import FormValidation from 'src/app/helpers/formValidation';

@Component({
  selector: 'app-daily-tast-edit-add',
  templateUrl: './daily-tast-edit-add.component.html',
  styleUrls: ['./daily-tast-edit-add.component.css']
})
export class DailyTastEditAddComponent {
  dailyTaskForm!: FormGroup;
  data = null;

  constructor(
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
    private formBuilder: FormBuilder,
  ){
    this._locale = 'ru';
    this._adapter.setLocale(this._locale);
  }

  ngOnInit(): void {   
    this.dailyTaskForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      deadLineDate: ['', Validators.required]
     })
  }

  onFormSubmit() {
    if (this.dailyTaskForm.valid){
      // const regUser = new UserRegistrationRequest();
      // regUser.FirstName = this.dailyTaskForm.value.firstname;
      // regUser.Login = this.dailyTaskForm.value.username;
      // regUser.Password = this.dailyTaskForm.value.password;
      // this.register(regUser);
      
    }
    else{
      FormValidation.validateAllFormFields(this.dailyTaskForm);
    }
    // if (this.empForm.valid) {
    //   if (this.data) {
    //     this._empService
    //       .updateEmployee(this.data.id, this.empForm.value)
    //       .subscribe({
    //         next: (val: any) => {
    //           this._coreService.openSnackBar('Employee detail updated!');
    //           this._dialogRef.close(true);
    //         },
    //         error: (err: any) => {
    //           console.error(err);
    //         },
    //       });
    //   } else {
    //     this._empService.addEmployee(this.empForm.value).subscribe({
    //       next: (val: any) => {
    //         this._coreService.openSnackBar('Employee added successfully');
    //         this._dialogRef.close(true);
    //       },
    //       error: (err: any) => {
    //         console.error(err);
    //       },
    //     });
    //   }
    // }
  }
}
