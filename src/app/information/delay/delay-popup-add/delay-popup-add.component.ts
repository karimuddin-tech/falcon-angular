import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delay-popup-add',
  templateUrl: './delay-popup-add.component.html',
  styleUrls: ['./delay-popup-add.component.scss'],
})
export class DelayPopupAddComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  public flightData: any;
  public form: FormGroup;
  private id: number;
  constructor(
    public dialogRef: MatDialogRef<DelayPopupAddComponent>,
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
      code: [''],
      time: [''],
    });
    this.patchValue();
  }
  onSubmit() {
    const body = {
      code: this.formControl.code.value,
      time: this.formControl.time.value,
      flightDetailsId: localStorage.getItem('flightDetailsId'),
    };

    if (this.id) {
      const putBody = {
        code: this.formControl.code.value,
        time: this.formControl.time.value,
        flightDetailsId: localStorage.getItem('flightDetailsId'),
        id: this.id,
      };
      console.log('put body ===>', putBody);
      this.http.put(this.apiUrl + '/delaydetails', putBody).subscribe((result: any) => {
        this.dialogRef.close();
        if (result && result.code == 200) {
          console.log('result ===>', result);
        }
      });
    } else {
      this.http.post(this.apiUrl + '/delaydetails', body).subscribe((result: any) => {
        this.dialogRef.close();
        if (result && result.code == 200) {
          console.log('result ===>', result);
        }
      });
    }
  }
  get formControl() {
    return this.form.controls;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  /**
   * patchValue
   */
  public patchValue() {
    if (this.data && this.data.length > 0) {
      console.log('delay patch value', this.data[0]);
      this.form.patchValue({
        code: this.data[0].code,
        time: this.data[0].time,
      });
      this.id = this.data[0].id;
    }
    console.log('id ===>', this.id);
  }
}
