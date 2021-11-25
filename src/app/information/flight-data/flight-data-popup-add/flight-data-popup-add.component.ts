import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-flight-data-popup-add',
  templateUrl: './flight-data-popup-add.component.html',
  styleUrls: ['./flight-data-popup-add.component.scss'],
})
export class FlightDataPopupAddComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  public flighttData: any;
  public form: FormGroup;
  private id: number;
  constructor(
    public dialogRef: MatDialogRef<FlightDataPopupAddComponent>,
    protected router: Router,
    private http: HttpClient,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('editable data ===>', data);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      leg: [''],
      air_time: [''],
      block_time: [''],
      blocks_off: [''],
      blocks_on: [''],
      date: [''],
      flt_no: [''],
      from: [''],
      landing: [''],
      night_time: [''],
      take_off1: [''],
      take_off2: [''],
      to: [''],
      land: [''],
    });

    this.patchValues();
  }

  onSubmit() {
    const body = {
      leg: this.formControl.leg.value,
      air_time: this.formControl.air_time.value,
      block_time: this.formControl.block_time.value,
      blocks_off: this.formControl.blocks_off.value,
      blocks_on: this.formControl.blocks_on.value,
      date: this.formControl.date.value,
      flt_no: this.formControl.flt_no.value,
      from: this.formControl.from.value,
      landing: this.formControl.landing.value,
      night_time: this.formControl.night_time.value,
      take_off1: this.formControl.take_off1.value,
      take_off2: this.formControl.take_off2.value,
      to: this.formControl.to.value,
      land: this.formControl.land.value,
      flightDetailsId: localStorage.getItem('flightDetailsId'),
    };

    if (this.data && this.data.length > 0) {
      const putBody = {
        leg: this.formControl.leg.value,
        air_time: this.formControl.air_time.value,
        block_time: this.formControl.block_time.value,
        blocks_off: this.formControl.blocks_off.value,
        blocks_on: this.formControl.blocks_on.value,
        date: this.formControl.date.value,
        flt_no: this.formControl.flt_no.value,
        from: this.formControl.from.value,
        landing: this.formControl.landing.value,
        night_time: this.formControl.night_time.value,
        take_off1: this.formControl.take_off1.value,
        take_off2: this.formControl.take_off2.value,
        to: this.formControl.to.value,
        land: this.formControl.land.value,
        flightDetailsId: localStorage.getItem('flightDetailsId'),
        id: this.id,
      };
      console.log("put data")
      this.http.put(this.apiUrl + '/legsdetails', putBody).subscribe((result: any) => {
        if (result && result.code == 200) {
          localStorage.getItem('flightDetailsId');
        }
        console.log('update leg details ===>', result);
      });
    } else {
      this.http.post(this.apiUrl + '/legsdetails', body).subscribe((result: any) => {
        if (result && result.code == 200) {
          localStorage.getItem('flightDetailsId');
        }
        console.log('add leg details ===>', result);
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
   * patchValues
   */
  public patchValues() {
    if (this.data && this.data.length > 0) {
      this.form.patchValue({
        leg: this.data[0].leg ? this.data[0].leg : '',
        air_time: this.data[0].air_time ? this.data[0].air_time : '',
        block_time: this.data[0].block_time ? this.data[0].block_time : '',
        blocks_off: this.data[0].blocks_off ? this.data[0].blocks_off : '',
        blocks_on: this.data[0].blocks_on ? this.data[0].blocks_on : '',
        date: new Date (this.data[0].date) ? this.formatDate(new Date(this.data[0].date)) : '',
        flt_no: this.data[0].flt_no ? this.data[0].flt_no : '',
        from: this.data[0].from ? this.data[0].from : '',
        landing: this.data[0].landing ? this.data[0].landing : '',
        night_time: this.data[0].night_time ? this.data[0].night_time : '',
        take_off1: this.data[0].take_off1 ? this.data[0].take_off1 : '',
        take_off2: this.data[0].take_off2 ? this.data[0].take_off2 : '',
        land: this.data[0].land ? this.data[0].land : '',
        to: this.data[0].to ? this.data[0].to : '',
      });
      // this.flighttData = data[0];
      this.id = this.data[0].id;
    }
  }
  private formatDate(date: any) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
}
