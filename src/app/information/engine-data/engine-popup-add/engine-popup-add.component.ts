import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-engine-popup-add',
  templateUrl: './engine-popup-add.component.html',
  styleUrls: ['./engine-popup-add.component.scss'],
})
export class EnginePopupAddComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  public flightData: any;
  public form: FormGroup;
  private id: number;
  constructor(
    public dialogRef: MatDialogRef<EnginePopupAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    protected router: Router,
    private http: HttpClient
  ) {
    console.log('engine data ====>', data);
  }

  /**
   * @method ngOnInit
   * @description angular life cycle event call onLoad page
   */
  ngOnInit() {
    this.form = this.fb.group({
      oat: [''],
      engine_egt_itt_eng1: [''],
      engine_egt_itt_eng2: [''],
      to_pwr: [''],
    });
    this.patchValue();
  }
  onSubmit() {
    const body = {
      oat: this.formControl.oat.value,
      engine_egt_itt_eng1: this.formControl.engine_egt_itt_eng1.value,
      engine_egt_itt_eng2: this.formControl.engine_egt_itt_eng2.value,
      to_pwr: this.formControl.to_pwr.value,
      flightDetailsId: localStorage.getItem('flightDetailsId'),
    };
    console.log('body ===>', body);
    if (this.data && this.data.length > 0) {
      const putBody = {
        oat: this.formControl.oat.value,
        engine_egt_itt_eng1: this.formControl.engine_egt_itt_eng1.value,
        engine_egt_itt_eng2: this.formControl.engine_egt_itt_eng2.value,
        to_pwr: this.formControl.to_pwr.value,
        flightDetailsId: localStorage.getItem('flightDetailsId'),
        id: this.id,
      };
      this.http.put(this.apiUrl + '/enginestart', putBody).subscribe((result: any) => {
        if (result && result.code == 200) {
          localStorage.getItem('flightDetailsId');
        }
        console.log('result ===>', body);
      });
    } else {
      this.http.post(this.apiUrl + '/enginestart', body).subscribe((result: any) => {
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
        oat: this.data[0].oat,
        engine_egt_itt_eng1: this.data[0].egt_itt_eng1,
        engine_egt_itt_eng2: this.data[0].egt_itt_eng2,
        egt_itt_eng1: this.data[0].egt_itt_eng1,
      });
      this.id = this.data[0].id;
    }
  }
}
