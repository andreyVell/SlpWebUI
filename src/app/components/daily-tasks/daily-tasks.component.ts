import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DailyTastEditAddComponent } from '../daily-tast-edit-add/daily-tast-edit-add.component';

@Component({
  selector: 'app-daily-tasks',
  templateUrl: './daily-tasks.component.html',
  styleUrls: ['./daily-tasks.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DailyTasksComponent {

  constructor (
    private dialog: MatDialog
  ){}

  public openAddEditTaskForm(){
    this.dialog.open(DailyTastEditAddComponent)
  }
}
