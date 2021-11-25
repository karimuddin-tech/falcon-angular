import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pass-popup-add',
  templateUrl: './pass-popup-add.component.html',
  styleUrls: ['./pass-popup-add.component.scss'],
})
export class PassPopupAddComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  public flightData: any;
  public form: FormGroup;
  private id: number;
  constructor(
    public dialogRef: MatDialogRef<PassPopupAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    protected router: Router,
    private http: HttpClient
  ) {
    console.log('');
  }

  /**
   * @method ngOnInit
   * @description angular life cycle event call onLoad page
   */
  ngOnInit() {
    this.form = this.fb.group({
      adult_economy: [''],
      child_economy: [''],
      inft_economy: [''],
      adult_business: [''],
      child_business: [''],
      inft_business: [''],
      nr: [''],
      cargo: [''],
    });
    this.patchValue();
  }

  onSubmit() {
    const body = {
      adult_economy: this.formControl.adult_economy.value,
      child_economy: this.formControl.child_economy.value,
      inft_economy: this.formControl.inft_economy.value,
      adult_business: this.formControl.adult_business.value,
      child_business: this.formControl.child_business.value,
      inft_business: this.formControl.inft_business.value,
      nr: this.formControl.nr.value,
      cargo: this.formControl.cargo.value,
      flightDetailsId: localStorage.getItem('flightDetailsId'),
    };

    console.log('body ===>', body);
    if (this.data && this.data.length > 0) {
      const putBody = {
        adult_economy: this.formControl.adult_economy.value,
        child_economy: this.formControl.child_economy.value,
        inft_economy: this.formControl.inft_economy.value,
        adult_business: this.formControl.adult_business.value,
        child_business: this.formControl.child_business.value,
        inft_business: this.formControl.inft_business.value,
        nr: this.formControl.nr.value,
        cargo: this.formControl.cargo.value,
        flightDetailsId: localStorage.getItem('flightDetailsId'),
        id: this.id,
      };
      this.http.put(this.apiUrl + '/passengersdetails', putBody).subscribe((result: any) => {
        if (result && result.code == 200) {
          localStorage.getItem('flightDetailsId');
        }
        console.log('result ===>', body);
      });
    } else {
      this.http.post(this.apiUrl + '/passengersdetails', body).subscribe((result: any) => {
        if (result && result.code == 200) {
          localStorage.getItem('flightDetailsId');
        }
        console.log('result ===>', body);
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  get formControl() {
    return this.form.controls;
  }

  public patchValue() {
    if (this.data && this.data.length > 0) {
      this.form.patchValue({
        adult_economy: this.data[0].adult_economy,
        child_economy: this.data[0].child_economy,
        inft_economy: this.data[0].inft_economy,
        adult_business: this.data[0].adult_business,
        child_business: this.data[0].child_business,
        inft_business: this.data[0].inft_business,
        nr: this.data[0].nr,
        cargo: this.data[0].cargo,
      });
      this.id = this.data[0].id;
    }
  }
}
