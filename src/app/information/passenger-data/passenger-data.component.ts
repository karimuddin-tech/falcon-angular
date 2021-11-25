import { IPassengersInFlights } from 'src/models/response.interface';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IFlightDetails, IFlightDetailsResponse } from 'src/models/response.interface';
import { PassPopupAddComponent } from './pass-popup-add/pass-popup-add.component';

@Component({
  selector: 'app-passenger-data',
  templateUrl: './passenger-data.component.html',
  styleUrls: ['./passenger-data.component.scss'],
})
export class PassengerDataComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  public data: any;
  public passengersDetails: IPassengersInFlights[];
  constructor(private fb: FormBuilder, protected router: Router, private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit(): void {
    if (localStorage.getItem('serial_no')  !== null ) this.flights();
  }
  openAdd() {
    const dialogRef = this.dialog.open(PassPopupAddComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (localStorage.getItem('serial_no')  !== null ) this.flights();

    });
  }
  flights() {
    this.http.get(this.apiUrl + '/flights/' + localStorage.getItem('serial_no')).subscribe((response: any) => {
      if (response && response.code === 200) {
        this.passengersDetails = response.data.PassesngersInFlights;
      } else {
        console.log('response ===>', response);
      }
    });
  }
  /**
   * edit
   * id: number
   **/
  public edit(id: number) {
    const dialogRef = this.dialog.open(PassPopupAddComponent, {
      data: this.passengersDetails.filter((a) => a.id === id),
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (localStorage.getItem('serial_no')  !== null ) this.flights();
    });
  }
}
