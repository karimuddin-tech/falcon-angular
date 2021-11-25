import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AircraftPopupComponent } from '../aircraft/aircraft-popup/aircraft-popup.component';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IFlightDetails } from 'src/models/response.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  public data: any;

  public flightDetails: IFlightDetails = {
    id: 0,
    aircraft_type: '',
    aircraft_registration: '',
    cockpit: '',
    cabin: '',
    serial_no: '',
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
    createdAt: '',
    updatedAt: '',
    DelayDetails: [],
    EngineStarts: [],
    FlightFuelDetails: [],
    FlightPilotsDetails: [],
    LegDetails: [],
    PassesngersInFlights: [],
    ZeroFuelWeights: [],
    PostFlightDetails: undefined,
    CruiseData: [],
    flightDetailsId: 0,
    flight_details_id: 0,
  };
  constructor(public dialog: MatDialog, private fb: FormBuilder, protected router: Router, private http: HttpClient) {}

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(AircraftPopupComponent);
  }
  onDone() {
    localStorage.clear();
    window.location.reload();
  }
}
