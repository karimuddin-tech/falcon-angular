import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-aircraft-popup',
  templateUrl: './aircraft-popup.component.html',
  styleUrls: ['./aircraft-popup.component.scss'],
})
export class AircraftPopupComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  public aircraftData: any;
  public form: FormGroup;
  constructor(public dialogRef: MatDialogRef<AircraftPopupComponent>, private fb: FormBuilder, protected router: Router, private http: HttpClient) {}

  /**
   * @method ngOnInit
   * @description angular life cycle event call onLoad page
   */
  ngOnInit() {
    this.form = this.fb.group({
      serial_no: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      no_legs: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      page_no: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      cockpit: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      cabin: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      aircraft_type: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      aircraft_registration: [
        '',
        {
          validators: [Validators.required],
        },
      ],
    });
  }
  onSubmit() {
    console.log('serial no ===>', this.form.value);
    if (this.form.valid) {
      localStorage.setItem('serial_no', this.formControl.serial_no.value);
      this.http.post(this.apiUrl + '/flights', this.form.value).subscribe((result: any) => {
        console.log("add filght data result ===>",result)
        this.dialogRef.close();
        if (result && result.code == 200) {
          localStorage.setItem('flightDetailsId', result.data.id);
        }
      });
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  get formControl() {
    return this.form.controls;
  }
}
