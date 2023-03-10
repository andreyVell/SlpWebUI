export class BackendApiEndpoints {    
    private static backend_api_url: string ='https://localhost:7196';
    public static user_registration_endpoint: string = this.backend_api_url + '/Registration';
    public static user_authentication_endpoint: string = this.backend_api_url + '/Login';
    public static user_getCrrentUserId_endpoint: string = this.backend_api_url + '/get_me';
    public static add_daily_task_endpoint: string = this.backend_api_url + '/DailyTasks';
    public static get_daily_tasks_endpoint: string = this.backend_api_url + '/DailyTasks';
}