import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DailyTastEditAddComponent } from '../daily-tast-edit-add/daily-tast-edit-add.component';
import { DailyTasksService } from 'src/app/services/daily-tasks.service';
import { ItemsCollectionResponce } from '../../models/ItemsCollectionResponse';
import { DailyTask } from 'src/app/models/DailyTasks/dailyTask';

@Component({
  selector: 'app-daily-tasks',
  templateUrl: './daily-tasks.component.html',
  styleUrls: ['./daily-tasks.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DailyTasksComponent {

  dailyTasks! : ItemsCollectionResponce<DailyTask>;
  constructor (
    private dialog: MatDialog,
    private dailyTasksService: DailyTasksService,
  ){
    this.dailyTasksService.getDailyTasks().subscribe((allData) =>{
      this.dailyTasks = allData;
    })
  }

  ngOnInit(): void {    
  }

  public openAddEditTaskForm(){
    this.dialog.open(DailyTastEditAddComponent)
  }
}
