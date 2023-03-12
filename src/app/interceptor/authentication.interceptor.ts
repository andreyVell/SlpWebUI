import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";
import { Router } from "@angular/router";
import { NgToastService } from "ng-angular-popup";
import { ApiResponseError } from "../models/ApiResponceError";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    constructor(
        private authService: AuthenticationService,
        private router: Router,
        private toast: NgToastService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authService.getAuthTokenFromLocalStorage();
        if (token){
            req = req.clone({ 
                setHeaders: { Authorization: 'Bearer ' + token },
            });
        }

        return next.handle(req).pipe(
            catchError((err:any) =>{
                if (err instanceof HttpErrorResponse){
                    console.log(err);
                    if(err.status === 401){                        
                        this.toast.warning({detail: 'Warning!', summary: 'Your session has expired, please log in again', duration: 4000})
                        this.router.navigate(['/Login']);
                    };
                    const apiError : ApiResponseError = err.error;   
                    if (apiError.errorMessage){          
                        this.toast.error({detail: 'Error!', summary: apiError.errorMessage, duration: 4000})
                    }
                    else
                    {
                        this.toast.error({detail: 'Error!', summary: "Something went wrong", duration: 4000})
                    }
                }
                return throwError(()=> new Error(err.message));
            })
        );
    }

}
