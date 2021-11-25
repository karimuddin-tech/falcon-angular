import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fuel-popup-add',
  templateUrl: './fuel-popup-add.component.html',
  styleUrls: ['./fuel-popup-add.component.scss'],
})
export class FuelPopupAddComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  public flightData: any;
  public form: FormGroup;
  private id: number;
  constructor(
    public dialogRef: MatDialogRef<FuelPopupAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    protected router: Router,
    private http: HttpClient
  ) {
    console.log('fuel data ===>', data);
  }

  /**
   * @method ngOnInit
   * @description angular life cycle event call onLoad page
   */
  ngOnInit() {
    this.form = this.fb.group({
      uplift: [''],
      unit: [''],
      spc_gravity: [''],
      departure: [''],
      arrival: [''],
    });
    this.patchValues();
  }

  onSubmit() {
    const body = {
      uplift: this.formControl.uplift.value,
      unit: this.formControl.unit.value,
      spc_gravity: this.formControl.spc_gravity.value,
      departure: this.formControl.departure.value,
      arrival: this.formControl.arrival.value,
      flightDetailsId: localStorage.getItem('flightDetailsId'),
    };
    if (this.data && this.data.length > 0) {
      /// PUT function will call here
      const putBody = {
        uplift: this.formControl.uplift.value,
        unit: this.formControl.unit.value,
        spc_gravity: this.formControl.spc_gravity.value,
        departure: this.formControl.departure.value,
        arrival: this.formControl.arrival.value,
        flightDetailsId: localStorage.getItem('flightDetailsId'),
        id: this.id,
      };
      this.http.put(this.apiUrl + '/flightfuel', putBody).subscribe((result: any) => {
        if (result && result.code == 200) {
          localStorage.getItem('flightDetailsId');
        }
        console.log('result ===>', result);
      });
    } else {
      this.http.post(this.apiUrl + '/flightfuel', body).subscribe((result: any) => {
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

  get formControl() {
    return this.form.controls;
  }

  /**
   *
   * patchValues
   *
   * */
  public patchValues() {
    if (this.data && this.data.length > 0) {
      this.form.patchValue({
        uplift: this.data[0].uplift,
        unit: this.data[0].unit,
        spc_gravity: this.data[0].spc_gravity,
        departure: this.data[0].departure,
        arrival: this.data[0].arrival,
      });
      this.id = this.data[0].id;
    }
  }
}
