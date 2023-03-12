import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import FormValidation from 'src/app/helpers/formValidation';
import { AddDailyTaskRequest } from 'src/app/models/DailyTasks/addDailyTaskRequest';
import { DailyTasksService } from '../../services/daily-tasks.service';
import { NgToastService } from 'ng-angular-popup';
import { ApiResponseError } from 'src/app/models/ApiResponceError';

@Component({
  selector: 'app-daily-tast-edit-add',
  templateUrl: './daily-tast-edit-add.component.html',
  styleUrls: ['./daily-tast-edit-add.component.css']
})
export class DailyTastEditAddComponent {
  dailyTaskForm!: FormGroup;

  constructor(
    private dailyTaskService: DailyTasksService,
    private toast: NgToastService,
    private adapter: DateAdapter<any>,
    private dialogRef: MatDialogRef<DailyTastEditAddComponent>,
    @Inject(MAT_DATE_LOCALE) private locale: string,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.locale = 'ru';
    this.adapter.setLocale(this.locale);
  }

  ngOnInit(): void {
    this.dailyTaskForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      deadLineDate: ['', Validators.required]
    });
    this.dailyTaskForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.dailyTaskForm.valid) {
      if (this.data) {
        //edit
      } else {
        //add
        const newTask = new AddDailyTaskRequest();
        newTask.Name = this.dailyTaskForm.value.name;
        newTask.Description = this.dailyTaskForm.value.description;
        newTask.IsCompleted = 'false';        
        newTask.DeadLineDate = this.dailyTaskForm.value.deadLineDate;
        this.addDailyTask(newTask);
      }
    }
    else {
      FormValidation.validateAllFormFields(this.dailyTaskForm);
    }
  }

  private addDailyTask(newDailyTask: AddDailyTaskRequest) {
    this.dailyTaskService.addDailyTask(newDailyTask).subscribe({
      next: (val: any) => {
        this.toast.success({ detail: 'Success!', summary: 'Task has been added!', duration: 4000 })
        this.dialogRef.close(true);
      }
    });
  }
}
