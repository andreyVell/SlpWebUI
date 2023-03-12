import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddDailyTaskRequest } from '../models/DailyTasks/addDailyTaskRequest';
import { Observable } from 'rxjs/internal/Observable';
import { BackendApiEndpoints } from '../helpers/backendApiEndpoints';
import { DailyTask } from '../models/DailyTasks/dailyTask';
import { ItemsCollectionResponce } from '../models/ItemsCollectionResponse';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailyTasksService {

  constructor(
    private httpClient: HttpClient
  ) { }

  
  public getDailyTasks() : Observable<any> {
    return this.httpClient.get<ItemsCollectionResponce<DailyTask>>(
      BackendApiEndpoints.get_daily_tasks_endpoint)
      //мапим дату из string to Date object
      .pipe(
        map(data => {
          data.items.forEach(item =>{
            item.deadLineDate = new Date(item.deadLineDate);
          });
          return data;
        })
      );
  }

  public addDailyTask(newDailyTask : AddDailyTaskRequest) : Observable<any>{
    return this.httpClient.post<any>(
      BackendApiEndpoints.add_daily_task_endpoint, 
      newDailyTask
      );
  }

}
