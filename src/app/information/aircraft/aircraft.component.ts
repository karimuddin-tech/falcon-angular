import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IFlightDetails } from 'src/models/response.interface';
import { AircraftPopupComponent } from './aircraft-popup/aircraft-popup.component';

@Component({
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.scss'],
})
export class AircraftComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  public data: any;
  public flightDetails: IFlightDetails = {
    aircraft_registration: '',
    aircraft_type: '',
    cabin: '',
    cockpit: '',
    createdAt: '',
    serial_no: '',
    updatedAt: '',
    PostFlightDetails: undefined,
    id: 0,
    no_legs: 0,
    page_no: 0,
    leg_no: 0,
    utc: 0,
    gross_wt: '',
    flt_lvl: 0,
    tat: 0,
    sat: 0,
    mach: 0,
    ac_pack_1: 0,
    ac_pack_2: 0,
    epr_tq_eng1: '',
    n1_np_eng1: '',
    egt_itt_eng1: '',
    n2_nh_eng1: '',
    fuel_flow_eng1: '',
    eng_bleed_eng1: false,
    vib_eng1: '',
    oil_press_eng1: '',
    oil_temp_eng1: '',
    epr_tq_eng2: '',
    n1_np_eng2: '',
    egt_itt_eng2: '',
    n2_nh_eng2: '',
    fuel_flow_eng2: '',
    eng_bleed_eng2: false,
    vib_eng2: '',
    oil_press_eng2: '',
    oil_temp_eng2: '',
    remarks: '',
    captain_signature: '',
    is_active: false,
    DelayDetails: [],
    EngineStarts: [],
    FlightFuelDetails: [],
    FlightPilotsDetails: [],
    LegDetails: [],
    PassesngersInFlights: [],
    ZeroFuelWeights: [],
    CruiseData: [],
    flightDetailsId: 0,
    flight_details_id: 0,
  };
  constructor(private fb: FormBuilder, protected router: Router, private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log("Ajj ===>",localStorage.getItem('serial_no') );
    
    if (localStorage.getItem('serial_no') !== null) this.flights();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AircraftPopupComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (localStorage.getItem('serial_no') !== null) this.flights();
    });
  }
  flights() {
    this.http.get(this.apiUrl + '/flights/' + localStorage.getItem('serial_no')).subscribe((response: any) => {
      if (response.code === 200) {
        localStorage.setItem('flightDetailsId', response.data.id);
        this.flightDetails = response.data;
        console.log(this.flightDetails);
      } else {
        console.log('flight details ===>', response);
      }
    });
  }
}
