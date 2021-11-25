import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pilot-popup-add',
  templateUrl: './pilot-popup-add.component.html',
  styleUrls: ['./pilot-popup-add.component.scss'],
})
export class PilotPopupAddComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  public flightData: any;
  public form: FormGroup;
  public id: number;
  constructor(
    public dialogRef: MatDialogRef<PilotPopupAddComponent>,
    private fb: FormBuilder,
    protected router: Router,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  /**
   * @method ngOnInit
   * @description angular life cycle event call onLoad page
   */
  ngOnInit() {
    this.form = this.fb.group({
      s_no: [''],
      rank: [''],
      name: [''],
      employee_no: [''],
      leg_number: [''],
      station: [''],
      pilot_utc: [''],
      is_active: [false],
    });
    this.patchValues();
  }

  onSubmit() {
    const body = {
      id: 1,
      s_no: localStorage.getItem('serial_no'),
      rank: this.formControl.rank.value,
      name: this.formControl.name.value,
      employee_no: this.formControl.employee_no.value,
      leg_number: this.formControl.leg_number.value,
      station: this.formControl.station.value,
      pilot_utc: this.formControl.pilot_utc.value,
      is_active: this.formControl.is_active.value,
      flightDetailsId: localStorage.getItem('flightDetailsId'),
    };

    console.log('body ===>', body);
    if (this.data && this.data.length > 0) {
      const putBody = {
        s_no: localStorage.getItem('serial_no'),
        rank: this.formControl.rank.value,
        name: this.formControl.name.value,
        employee_no: this.formControl.employee_no.value,
        leg_number: this.formControl.leg_number.value,
        station: this.formControl.station.value,
        pilot_utc: this.formControl.pilot_utc.value,
        is_active: this.formControl.is_active.value,
        flightDetailsId: localStorage.getItem('flightDetailsId'),
        id: this.id,
      };
      this.http.put(this.apiUrl + '/flightpilots', putBody).subscribe((result: any) => {
        if (result && result.code == 200) {
          localStorage.getItem('flightDetailsId');
        }
        console.log('result ===>', result);
      });
    } else {
      console.log('body ===>', body);
      this.http.post(this.apiUrl + '/flightpilots', body).subscribe((result: any) => {
        if (result && result.code == 200) {
          localStorage.getItem('flightDetailsId');
        }
        console.log('result ===>', result);
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  private patchValues() {
    if (this.data && this.data.length > 0) {
      this.form.patchValue({
        s_no: this.data[0].s_no,
        rank: this.data[0].rank,
        name: this.data[0].name,
        employee_no: this.data[0].employee_no,
        leg_number: this.data[0].leg_number,
        station: this.data[0].station,
        pilot_utc: this.data[0].pilot_utc,
        is_active: this.data[0].is_active,
      });
      this.id = this.data[0].id;
    }
  }
  get formControl() {
    return this.form.controls;
  }
}
