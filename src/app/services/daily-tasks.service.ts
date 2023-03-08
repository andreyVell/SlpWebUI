import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DailyTasksService {
  constructor(
    private http: HttpClient
  ) { }

  public getDailyTasks(){
    
  }

}
