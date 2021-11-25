import { IFlightDetails, IZeroFuelWeights } from 'src/models/response.interface';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-zero-fuel-popup-add',
  templateUrl: './zero-fuel-popup-add.component.html',
  styleUrls: ['./zero-fuel-popup-add.component.scss'],
})
export class ZeroFuelPopupAddComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  public flightData: any;
  public form: FormGroup;
  public id: number;
  constructor(
    public dialogRef: MatDialogRef<ZeroFuelPopupAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    protected router: Router,
    private http: HttpClient
  ) {
    console.log('patch value ===>', this.data);
  }

  /**
   * @method ngOnInit
   * @description angular life cycle event call onLoad page
   */
  ngOnInit() {
    this.form = this.fb.group({
      weight: [''],
    });
    this.patchValues();
  }

  onSubmit() {
    const body = {
      weight: this.formControl.weight.value,
      flightDetailsId: localStorage.getItem('flightDetailsId'),
    };
    if (this.data && this.data.length > 0) {
      const putBody = {
        weight: this.formControl.weight.value,
        flightDetailsId: localStorage.getItem('flightDetailsId'),
        id: this.id,
      };
      console.log('put body ===>', putBody);
      this.http.put(this.apiUrl + '/zerofuelweightdetails', putBody).subscribe((result: any) => {
        if (result && result.code == 200) {
          localStorage.getItem('flightDetailsId');
        }
        console.log('update success ===>', result);
      });
    } else {
      console.log('post zero fuel weight details value ==>', body);

      this.http.post(this.apiUrl + '/zerofuelweightdetails', body).subscribe((result: any) => {
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

  public patchValues() {
    if (this.data && this.data.length > 0) {
      this.form.patchValue({
        weight: this.data[0].weight,
      });
      this.id = this.data[0].id;
    }
  }
}
