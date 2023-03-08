import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  showDashboard : boolean = false;
  showDailyTasks : boolean = true;
  showEducation: boolean = false;
  showFinance: boolean = false;
  showSport: boolean = false;
  showBook: boolean = false;
  public dashboardClick(){
    this.hideAllComponents();
    this.showDashboard = true;
  }

  public dailyTasksClick(){
    this.hideAllComponents();
    this.showDailyTasks = true;
  }

  private hideAllComponents(){
    this.showDashboard = false;
    this.showDailyTasks = false;
    this.showEducation = false;
    this.showFinance = false;
    this.showSport = false;
    this.showBook = false;
  }
}
