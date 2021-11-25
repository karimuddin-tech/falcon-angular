import { IDelayDetails } from 'src/models/response.interface';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DelayPopupAddComponent } from './delay-popup-add/delay-popup-add.component';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.scss'],
})
export class DelayComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  public data: any;
  public delayData: IDelayDetails[];
  constructor(private fb: FormBuilder, protected router: Router, private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit(): void {
    if (localStorage.getItem('flightDetailsId') !== null) this.flights();
  }
  openAdd() {
    const dialogRef = this.dialog.open(DelayPopupAddComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('data ===>', this.data);
      if (localStorage.getItem('serial_no') !== null) this.flights();
    });
  }
  flights() {
    this.http.get(this.apiUrl + '/flights/' + localStorage.getItem('serial_no')).subscribe((response: any) => {
      if (response && response.code === 200) {
        this.delayData = response.data.DelayDetails;
        console.log('delay response ====>', response);
      } else {
        console.log('response ===>', this.delayData);
      }
    });
  }
  /**
   * edit
   * id: number
   **/
  public edit(id: number) {
    const dialogRef = this.dialog.open(DelayPopupAddComponent, {
      data: this.delayData.filter((a) => a.id === id),
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (localStorage.getItem('flightDetailsId') !== null) this.flights();
    });
  }
}
