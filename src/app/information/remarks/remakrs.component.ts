import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-remarks',
  templateUrl: './remarks.component.html',
  styleUrls: ['./remarks.component.scss']
})
export class RemarksComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  public flightData: any;
  constructor(
    private fb: FormBuilder,
    protected router: Router,
    private http: HttpClient
  ) {}

  /**
   * @method ngOnInit
   * @description angular life cycle event call onLoad page
   */
  ngOnInit() {}

onSubmit(data: any) {
  const body = {
    s_no: data.s_no,
    rank: data.rank,
    name: data.name,
    employee_no: data.employee_no,
    leg_number: data.leg_number,
    station: data.station,
    pilot_utc: data.pilot_utc,
    flightDetailsId: localStorage.getItem('flightDetailsId'),
  };
  
  console.log('body ===>', body);
    this.http
      .post(this.apiUrl + '/flightpilots', body)
      .subscribe((result: any) => {
        if (result && result.code == 200 ) {
          localStorage.getItem('flightDetailsId' );
        }
        console.log('result ===>', result);
      });
  }
}