import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from './error/error.component';

@Injectable({
  providedIn: 'root',
})
export class ApiInterceptor implements HttpInterceptor {
  constructor(private dialog: MatDialog) {
    console.log('yoooooo ===>');
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('yoooooo ===>');
    return next
      .handle(req)
      .pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            if (event !== null && event.body.code === 200) {
            } else {
              let errorMessage = 'An error occurred!';
              if (event.body.message) {
                errorMessage = event.body.message;
              }
              this.dialog.open(ErrorComponent, { data: { message: errorMessage } });
            }
          }
          return event;
        })
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.log('yoooooo ===>');
          let errorMessage = 'An unknown error occurred!';
          if (error.error.message) {
            errorMessage = error.error.message;
          }
          this.dialog.open(ErrorComponent, { data: { message: errorMessage } });
          return of(error);
        }) as any
      );
  }
}
