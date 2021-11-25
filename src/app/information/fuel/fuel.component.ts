import { IFlightFuelDetails } from 'src/models/response.interface';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IFlightDetails, IFlightDetailsResponse } from 'src/models/response.interface';
import { FuelPopupAddComponent } from './fuel-popup-add/fuel-popup-add.component';

@Component({
  selector: 'app-fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.scss'],
})
export class FuelComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  public data: any;
  public flightFuelDetails: IFlightFuelDetails[];
  constructor(private fb: FormBuilder, protected router: Router, private http: HttpClient, public dialog: MatDialog) {}
  ngOnInit(): void {
    if (localStorage.getItem('serial_no') !== null) this.flights();
  }

  openAdd() {
    const dialogRef = this.dialog.open(FuelPopupAddComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('data ===>', this.data);
      if (localStorage.getItem('serial_no') !== null) this.flights();
    });
  }
  flights() {
    this.http.get(this.apiUrl + '/flights/' + localStorage.getItem('serial_no')).subscribe((response: any) => {
      if (response.code === 200) {
        this.flightFuelDetails = response.data.FlightFuelDetails;
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
    const dialogRef = this.dialog.open(FuelPopupAddComponent, {
      data: this.flightFuelDetails.filter((a) => a.id === id),
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (localStorage.getItem('serial_no') !== null) this.flights();
    });
  }
}
