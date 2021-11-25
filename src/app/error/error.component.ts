import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { Subscription } from "rxjs";

// import { ErrorService } from "./error.service";

@Component({
  templateUrl: './error.component.html',
  selector: 'app-error',
  // styleUrls: ["./error.component.css"]
})
export class ErrorComponent {
  // data: { message: string };
  // private errorSub: Subscription;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }, public dialog: MatDialog) {}
  // constructor(private errorService: ErrorService) {}

  // ngOnInit() {
  //   this.errorSub = this.errorService.getErrorListener().subscribe(message => {
  //     this.data = { message: message };
  //   });
  // }
  ocClose() {
    this.dialog.closeAll();
  }
  // onHandleError() {
  //   this.errorService.handleError();
  // }

  // ngOnDestroy() {
  //   this.errorSub.unsubscribe();
  // }
}
