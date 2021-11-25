import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  IFlightDetails,
  IFlightDetailsResponse,
  IFlightPilotDetails,
} from 'src/models/response.interface';
import { PilotPopupAddComponent } from './pilot-popup-add/pilot-popup-add.component';

@Component({
  selector: 'app-pilot-data',
  templateUrl: './pilot-data.component.html',
  styleUrls: ['./pilot-data.component.scss'],
})
export class PilotDataComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  public data: any;
  public flightPilotDetails: IFlightPilotDetails[];
  constructor(
    private fb: FormBuilder,
    protected router: Router,
    private http: HttpClient,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('serial_no') !== null) this.flights();
  }

  openAdd() {
    const dialogRef = this.dialog.open(PilotPopupAddComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('data ===>', this.data);
      this.flights();
    });
  }
  flights() {
    this.http
      .get(this.apiUrl + '/flights/' + localStorage.getItem('serial_no'))
      .subscribe((response: any) => {
        if (response && response.code === 200) {
          this.flightPilotDetails = response.data.FlightPilotsDetails;
        } else {
          console.log('response ====>', response);
        }
      });
  }
     /**
   * edit
   * id: number
   **/
      public edit(id: number) {
        const dialogRef = this.dialog.open(PilotPopupAddComponent, {
          data: this.flightPilotDetails.filter((a) => a.id === id),
        });
        dialogRef.afterClosed().subscribe((result) => {
          if (localStorage.getItem('serial_no') !== null) this.flights();
        });
      }
}
