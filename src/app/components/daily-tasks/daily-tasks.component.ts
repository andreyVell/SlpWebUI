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
  //TODO add task window design
  //TODO add created task to currentDailyTasks
  //TODO edit task
  //TODO complete task
  //TODO other design staff (display in different columns)
  currentDailyTasks : Array<DailyTask> = new Array<DailyTask>();
  currentDailyTasksCount : number = 0;
  completedDailyTasks : Array<DailyTask> = new Array<DailyTask>();
  completedDailyTasksCount : number = 0;
  constructor (
    private dialog: MatDialog,
    private dailyTasksService: DailyTasksService,
  ){
    this.dailyTasksService.getDailyTasks()        
      .subscribe({
        next: ( response: ItemsCollectionResponce<DailyTask>) => {
          this.currentDailyTasks = response.items
            .filter((task: DailyTask) => !task.isCompleted)
            .sort((t1, t2) => 
                {
                  return t1.deadLineDate.getTime() - t2.deadLineDate.getTime();
                });        
          this.currentDailyTasksCount = this.currentDailyTasks.length;

          this.completedDailyTasks = response.items
            .filter((task: DailyTask) => task.isCompleted)
            .sort((t1, t2) => 
                {
                  return t1.deadLineDate.getTime() - t2.deadLineDate.getTime();
                }); 
          this.completedDailyTasksCount = this.completedDailyTasks.length;
        },      
      });
  }

  ngOnInit(): void {    
  }

  public openAddEditTaskForm(){
    this.dialog.open(DailyTastEditAddComponent)
  }
}
