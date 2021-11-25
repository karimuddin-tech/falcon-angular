import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-madical-form',
  templateUrl: './add-madical-form.component.html',
  styleUrls: ['./add-madical-form.component.scss'],
})
export class AddMadicalFormComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  public form: FormGroup;
  public fromDate = new Date();
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [''],
      pilot_name: [''],
      log_id: [''],
      reff_no: [''],
      staff_no: [''],
      lic_type: [''],
      lic_no: [''],
      ac_type: [''],
      eng_lang_pro: [''],

      license_valid_from: [''],
      license_valid_to: [''],

      ppc_valid_from: [''],
      ppc_valid_to: [''],
      ppc_limit: [''],

      opc_valid_from: [''],
      opc_valid_to: [''],
      opc_limit: [''],

      spec_evac_fire_issue_date: [''],
      spec_evac_fire_valid_upto: [''],

      wet_drill_issue_date: [''],
      wet_drill_valid_upto: [''],

      type_tech_ref_issue_date: [''],
      type_tech_ref_valid_upto: [''],

      route_chk_issue_date: [''],
      route_chk_valid_upto: [''],

      crm_issue_date: [''],
      crm_valid_upto: [''],
      crm_days_left: [''],

      dgr_issue_date: [''],
      dgr_valid_upto: [''],

      av_sec_issue_date: [''],
      av_sec_valid_upto: [''],

      medical_exam_date: [''],
      medical_exam_valid_upto: [''],

      single_med_next_due: [''],

      med_board_next_due: [''],

      ecg_next_due: [''],

      ett_next_due: [''],

      xray_chest_next_due: [''],

      audiomatry_next_due: [''],

      on_next_medical: [''],
      total_hours: [''],
      l_183_days: [''],
    });
  }
  public onSubmit() {
    this.http.post(this.apiUrl + '/licences', this.form.value).subscribe((val) => {
      console.log(' values  ===>', val);
    });
    window.location.reload();
  }
  get Control() {
    return this.form.controls;
  }
}
