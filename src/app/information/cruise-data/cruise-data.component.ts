import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ICruiseData,
} from 'src/models/response.interface';
import { CruisePopupAddComponent } from './cruise-popup-add/cruise-popup-add.component';

@Component({
  selector: 'app-cruise-data',
  templateUrl: './cruise-data.component.html',
  styleUrls: ['./cruise-data.component.scss'],
})
export class CruiseDataComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  public data: any;
  public cruiseData: ICruiseData[];
  constructor(
    private fb: FormBuilder,
    protected router: Router,
    private http: HttpClient,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('flightDetailsId')) this.flights();
  }
  openAdd() {
    const dialogRef = this.dialog.open(CruisePopupAddComponent);
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
          this.cruiseData = response.data.CruiseData;
          console.log('delay response ====>', response);
        } else {
          console.log('response ===>', this.cruiseData);
        }
      });
  }
}
