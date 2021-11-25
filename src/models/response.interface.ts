export interface IResponse {
  statusCode: number;
  message: string;
  data: IMedicalReport;
}

interface IMedicalReport {
  ac_type: string;
  createdAt: string;
  eng_lang_pro: string;
  id: number;
  is_active: boolean;
  lic_no: string;
  lic_type: string;
  license_days_left: number;
  license_valid_from: string;
  license_valid_to: string;
  log_id: number;
  pilot_name: string;
  reff_no: string;
  staff_no: string;
  updatedAt: string;
  ppc_valid_from: string;
  ppc_valid_to: string;
  opc_valid_from: string;
  opc_valid_to: string;
  spec_evac_fire_issue_date: string;
  spec_evac_fire_valid_upto: string;
  wet_drill_issue_date: string;
  wet_drill_valid_upto: string;
  type_tech_ref_issue_date: string;
  type_tech_ref_valid_upto: string;
  route_chk_issue_date: string;
  route_chk_valid_upto: string;
  crm_issue_date: string;
  crm_valid_upto: string;
  dgr_issue_date: string;
  dgr_valid_upto: string;
  av_sec_issue_date: string;
  av_sec_valid_upto: string;
  medical_exam_date: string;
  medical_exam_valid_upto: string;
  single_med_next_due: string;
  med_board_next_due: string;
  ecg_next_due: string;
  ett_next_due: string;
  xray_chest_next_due: string;
  audiomatry_next_due: string;
  on_next_medical: string;
  total_hours: string;
  l_365_days: string;
  l_183_days: string;
  l_30_days: string;
  l_7_days: string;
}
export interface IFlightDetailsResponse {
  code: number;
  message: string;
  data: IFlightDetails;
}
export interface IFlightDetails {
  PostFlightDetails: any;
  id: number;
  aircraft_type: string;
  aircraft_registration: string;
  cockpit: string;
  cabin: string;
  serial_no: string;
  no_legs: number;
  page_no: number;
  leg_no: number;
  utc: number;
  gross_wt: string;
  flt_lvl: number;
  tat: number;
  sat: number;
  mach: number;
  ac_pack_1: number;
  ac_pack_2: number;
  epr_tq_eng1: string;
  n1_np_eng1: string;
  egt_itt_eng1: string;
  n2_nh_eng1: string;
  fuel_flow_eng1: string;
  eng_bleed_eng1: boolean;
  vib_eng1: string;
  oil_press_eng1: string;
  oil_temp_eng1: string;
  epr_tq_eng2: string;
  n1_np_eng2: string;
  egt_itt_eng2: string;
  n2_nh_eng2: string;
  fuel_flow_eng2: string;
  eng_bleed_eng2: boolean;
  vib_eng2: string;
  oil_press_eng2: string;
  flightDetailsId: number;
  flight_details_id: number;
  oil_temp_eng2: string;
  remarks: string;
  captain_signature: string;
  is_active: boolean;
  createdAt: string;
  updatedAt: string;
  DelayDetails: IDelayDetails[];
  EngineStarts: IEngineStarts[];
  FlightFuelDetails: IFlightFuelDetails[];
  FlightPilotsDetails: IFlightPilotDetails[];
  LegDetails: ILegDetails[];
  PassesngersInFlights: IPassengersInFlights[];
  ZeroFuelWeights: IZeroFuelWeights[];
  CruiseData: ICruiseData[];
}

export interface IDelayDetails {
  id: number;
  code: number;
  time: string;
  flight_details_id: number;
  flightDetailsId:number;
  is_active: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface IEngineStarts {
  id: number;
  oat: string;
  egt_itt_eng1: number;
  egt_itt_eng2: number;
  to_pwr: string;
  flight_details_id: number;
  flightDetailsId:number;
  is_active: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface IFlightFuelDetails {
  id: number;
  uplift: number;
  unit: string;
  spc_gravity: string;
  departure: number;
  arrival: number;
  flightDetailsId:number;
    flight_details_id:number;
  is_active: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface IFlightPilotDetails {
  id: number;
  s_no: number;
  rank: string;
  name: string;
  employee_no: number;
  leg_number: number;
  station: string;
  utc: number;
  flight_details_id: number;
  flightDetailsId:number;
  is_active: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface ILegDetails {
  id: number;
  leg: number;
  flt_no: string;
  date: string;
  from: string;
  to: string;
  blocks_off: string;
  take_off1: string;
  landing: string;
  blocks_on: string;
  block_time: string;
  air_time: string;
  night_time: string;
  take_off2: string;
  land: string;
  flight_details_id: number;
  is_active: boolean;
  createdAt: string;
  updatedAt: string;
  flightDetailsId: number;
}
export interface IPassengersInFlights {
  id: number;
  adult_economy: number;
  child_economy: number;
  inft_economy: number;
  adult_business: number;
  child_business: number;
  inft_business: number;
  nr: string;
  cargo: string;
  flight_details_id: number;
  is_active: boolean;
  createdAt: string;
  updatedAt: string;
  flightDetailsId: number;
}
export interface IZeroFuelWeights {
code: number;
  id: number;
  weight: number;
  flight_details_id: number;
  is_active: boolean;
  createdAt: string;
  updatedAt: string;  flightDetailsId: number;
}

export interface ICruiseData {
  id: number,
  leg_no: number,
  utc: number,
  gross_wt: number,
  flt_lvl: number,
  tat: number,
  sat: number,
  mach: number,
  ias: number,
  ac_pack_1: number,
  ac_pack_2: number,
  epr_tq_eng1: number,
  n1_np_eng1: number,
  egt_itt_eng1: number,
  n2_nh_eng1: number,
  fuel_flow_eng1: number,
  eng_bleed_eng1: boolean,
  vib_eng1: number,
  oil_press_eng1: number,
  oil_temp_eng1: number,
  epr_tq_eng2: number,
  n1_np_eng2: number,
  egt_itt_eng2: number,
  n2_nh_eng2: number,
  fuel_flow_eng2: number,
  eng_bleed_eng2: boolean,
  vib_eng2: number,
  oil_press_eng2: number,
  oil_temp_eng2: number,
  flightDetailsId: number;
  flight_details_id: number,
  is_active: boolean,
  updatedAt: string,
  createdAt: string
}

export interface IPostFlightDetails {
  
    serial_no: number;
    aircraft_type: string;
    aircraft_registration: string;
    cockpit: string;
    cabin: string;
    no_legs: string;
    page_no: string;
    leg_no: string;
    utc: string;
    gross_wt: string;
    flt_lvl: string;
    tat: string;
    sat: string;
    mach: string;
    ias: string;
    ac_pack_1: string;
    ac_pack_2: string;
    epr_tq_eng1: string;
    n1_np_eng1: string;
    egt_itt_eng1: string;
    n2_nh_eng1: string;
    fuel_flow_eng1: string;
    eng_bleed_eng1: boolean;
    vib_eng1: string;
    oil_press_eng1: string;
    oil_temp_eng1: string;
    epr_tq_eng2: string;
    n1_np_eng2: string;
    egt_itt_eng2: string;
    n2_nh_eng2: string;
    fuel_flow_eng2: string;
    eng_bleed_eng2: boolean;
    vib_eng2: string;
    oil_press_eng2: string;
    oil_temp_eng2: string;
    remarks: string;
    captain_signature: string;

    code:string;

    oat: string;
    engine_egt_itt_eng1: string;
    engine_egt_itt_eng2: string;
    to_pwr: string;

      uplift: string;
      unit: string;
      spc_gravity: string;
      departure: string;
      arrival: string;

        s_no: string;
      rank: string;
      name: string;
      employee_no:string;
      leg_number: string;
      station: string;
      pilot_utc: string;
    
          leg: string;
      flt_no: string;
      date: string;
      from: string;
      to: string;
      blocks_of: string;
      take_off1: string;
      landing: string;
    blocks_on: string;
      block_time: string;
      air_time: string;
      night_time: string;
      take_off2:string;
      land: string;

            adult_economy: string;
      child_economy: string;
      inft_economy: string;

      adult_business: string;
      child_business: string;
      inft_business: string;
      nr: string;
      cargo: string;

      zero_fuel_weight: string;

}
