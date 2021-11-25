import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  IFlightDetails,
  IFlightDetailsResponse,
  ILegDetails,
} from 'src/models/response.interface';

@Component({
  selector: 'app-main-popup',
  templateUrl: './main-popup.component.html',
  styleUrls: ['./main-popup.component.scss'],
})
export class MainPopupComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  public data: any;
  public legDetails: ILegDetails | any = {
    leg: '',
    flt_no: '',
    date: '',
    from: '',
    to: '',
    blocks_off: '',
    take_off1: '',
    landing: '',
    blocks_on: '',
    block_time: '',
    air_time: '',
    night_time: '',
    take_off2: '',
    land: '',
    flightDetailsId: '',
  };
  flightForm: any;

  constructor(
    public dialogRef: MatDialogRef<MainPopupComponent>,
    private fb: FormBuilder,
    protected router: Router,
    private http: HttpClient,
    public formsModule: FormsModule
  ) {}

  /**
   * @method ngOnInit
   * @description angular life cycle event call onLoad page
   */
  ngOnInit() {

    this.flightForm = this.fb.group({
      // email: ['', [Validators.required, Validators.minLength(3), Validators.pattern(Pattern.ALPHANUMERIC)]],
      // password: ['', [Validators.required, Validators.minLength(6)]],
      flt_no: ['' ],
      date: [''],
      from: ['' ],
      to: ['' ],
      blocks_off: [''],
      take_off1: ['' ],
      landing: ['' ],
      blocks_on: [''],
      block_time: ['' ],
      air_time: [''],
      night_time: ['' ],
      take_off2: ['' ],
      
  });
    if (localStorage.getItem('flightDetailsId')) {
      this.flights();
      this.onSubmit(this.data );
      
  }}
  onSubmit(data: any) {
    console.log('data ====>', data);
    localStorage.setItem('leg', data);
    const body = {
      air_time: data.air_time,
      block_time: data.block_time,
      blocks_off: data.blocks_off,
      blocks_on: data.blocks_on,
      date: data.date,
      flt_no: data.flt_no,
      from: data.from,
      landing: data.landing,
      night_time: data.night_time,
      take_off1: data.take_off1,
      take_off2: data.take_off2,
      to: data.to,
      flightDetailsId: localStorage.getItem('flightDetailsId'),
    };

    console.log('legDetails body ===>', body);
    this.http
      .put(this.apiUrl + '/legsdetails', body)
      .subscribe((response) => {
          console.log('legDetails response ===>', response);
      });
     
  }

  flights() {
    this.http
      .get(this.apiUrl + '/flights/' + localStorage.getItem('serial_no'))
      .subscribe((response: any) => {
        if (response && response.code === 200) {
          
          this.legDetails = response.data.LegDetails;

          console.log('response ===>', this.legDetails);
        }
      });
  }
  onNoClick()  {
    this.dialogRef.close();
  }
}
