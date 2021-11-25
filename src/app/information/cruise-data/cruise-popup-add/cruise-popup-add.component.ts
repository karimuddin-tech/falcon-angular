import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-cruise-popup-add',
  templateUrl: './cruise-popup-add.component.html',
  styleUrls: ['./cruise-popup-add.component.scss'],
})
export class CruisePopupAddComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  public flightData: any;
  constructor(
    public dialogRef: MatDialogRef<CruisePopupAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    protected router: Router,
    private http: HttpClient
  ) {
    console.log('data ====>', data);
  }

  /**
   * @method ngOnInit
   * @description angular life cycle event call onLoad page
   */
  ngOnInit() {}
  onSubmit(data: any) {
    const body = {
      leg_no: data.leg_no,
      utc: data.utc,
      gross_wt: data.gross_wt,
      flt_lvl: data.flt_lvl,
      tat: data.tat,
      sat: data.sat,
      mach: data.mach,
      ias: data.ias,
      ac_pack_1: data.ac_pack_1,
      ac_pack_2: data.ac_pack_2,
      epr_tq_eng1: data.epr_tq_eng1,
      n1_np_eng1: data.n1_np_eng1,
      egt_itt_eng1: data.egt_itt_eng1,
      n2_nh_eng1: data.n2_nh_eng1,
      fuel_flow_eng1: data.fuel_flow_eng1,
      eng_bleed_eng1: data.eng_bleed_eng1,
      vib_eng1: data.vib_eng1,
      oil_press_eng1: data.oil_press_eng1,
      oil_temp_eng1: data.oil_temp_eng1,
      epr_tq_eng2: data.epr_tq_eng2,
      n1_np_eng2: data.n1_np_eng2,
      egt_itt_eng2: data.egt_itt_eng2,
      n2_nh_eng2: data.n2_nh_eng2,
      fuel_flow_eng2: data.fuel_flow_eng2,
      eng_bleed_eng2: data.eng_bleed_eng2,
      vib_eng2: data.vib_eng2,
      oil_press_eng2: data.oil_press_eng2,
      oil_temp_eng2: data.oil_temp_eng2,
      flightDetailsId: localStorage.getItem('flightDetailsId'),
    };

    console.log('body ===>', body);
    this.http
      .post(this.apiUrl + '/cruisedata', body)
      .subscribe((result: any) => {
        console.log('result ===>', result);
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
