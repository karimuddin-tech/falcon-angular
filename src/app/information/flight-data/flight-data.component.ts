import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ILegDetails } from 'src/models/response.interface';
import { FlightDataPopupAddComponent } from './flight-data-popup-add/flight-data-popup-add.component';
@Component({
  selector: 'app-flight-data',
  templateUrl: './flight-data.component.html',
  styleUrls: ['./flight-data.component.scss'],
})
export class FlightDataComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  public legDetails: ILegDetails[];
  constructor(private fb: FormBuilder, protected router: Router, private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit(): void {
    if (localStorage.getItem('serial_no') !== null) this.flights();
  }
  openAdd() {
    const dialogRef = this.dialog.open(FlightDataPopupAddComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (localStorage.getItem('serial_no') !== null) this.flights();
    });
  }
  flights() {
    this.http.get(this.apiUrl + '/flights/' + localStorage.getItem('serial_no')).subscribe((response: any) => {
      console.log('result leg details ===>', response);
      if (response && response.code === 200) {
        this.legDetails = response.data.LegDetails;
      } else {
        console.log('result  ===>', response);
      }
    });
  }
  /**
   * edit
   * id: number  
   **/
  public edit(id: number) {
    const dialogRef = this.dialog.open(FlightDataPopupAddComponent, {
      data: this.legDetails.filter((a) => a.id === id),
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (localStorage.getItem('serial_no') !== null) this.flights();
    });
  }
}
