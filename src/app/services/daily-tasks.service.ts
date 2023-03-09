import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddDailyTaskRequest } from '../models/DailyTasks/addDailyTaskRequest';
import { Observable } from 'rxjs/internal/Observable';
import { BackendApiEndpoints } from '../helpers/backendApiEndpoints';

@Injectable({
  providedIn: 'root'
})
export class DailyTasksService {

  constructor(
    private http: HttpClient
  ) { }

  public getDailyTasks() {

  }

  public addDailyTask(newDailyTask : AddDailyTaskRequest) : Observable<any>{
    return this.http.post<any>(
      BackendApiEndpoints.add_daily_task_endpoint, 
      newDailyTask
      );
  }

}