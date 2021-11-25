import { MedicalFormService } from 'src/shared/medical-form.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-medicalform',
  templateUrl: './medicalform.component.html',
  styleUrls: ['./medicalform.component.scss'],
})
export class MedicalformComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  public daysLeft = '';
  public dateNow = new Date();
  public 0 = 'null';
  public dnf = 'data-not-found';
  public ddpValues: any[] = [];
  public data = {
    id: '',
    pilot_name: '',
    log_id: '',
    reff_no: '',
    staff_no: '',
    lic_type: '',
    lic_no: '',
    ac_type: '',
    eng_lang_pro: '',
    license_valid_from: '',
    license_valid_to: '',
    ppc_valid_from: '',
    ppc_valid_to: '',
    opc_valid_from: '',
    opc_valid_to: '',
    spec_evac_fire_issue_date: '',
    spec_evac_fire_valid_upto: '',
    wet_drill_issue_date: '',
    wet_drill_valid_upto: ' ',
    type_tech_ref_issue_date: ' ',
    type_tech_ref_valid_upto: '',
    route_chk_issue_date: '',
    route_chk_valid_upto: '',
    crm_issue_date: '',
    crm_valid_upto: '',
    dgr_issue_date: '',
    dgr_valid_upto: '',
    av_sec_issue_date: '',
    av_sec_valid_upto: '',
    medical_exam_date: '',
    medical_exam_valid_upto: '',
    single_med_next_due: '',
    med_board_next_due: '',
    ecg_next_due: '',
    ett_next_due: '',
    xray_chest_next_due: '',
    audiomatry_next_due: '',
    on_next_medical: '',
    total_hours: '',
    l_365_days: '',
    l_183_days: '',
    l_30_days: '',
    l_7_days: '',
    is_active: '',
    createdAt: '',
    updatedAt: '',
    license_days_left: '',
    ppc_days_left: '',
    ppc_limit: '',
    opc_days_left: '',
    opc_limit: '',
    spec_evac_fire_days_left: '',
    wet_drill_days_left: '',
    type_tech_ref_days_left: '',
    route_chk_days_left: '',
    crm_days_left: '',
    dgr_days_left: '',
    av_sec_days_left: '',
    medical_exam_days_left: '',
    single_med_days_left: '',
    med_board_days_left: '',
    ecg_days_left: '',
    ett_days_left: '',
    xray_chest_days_left: '',
    audiomatry_days_left: '',
  };
  constructor(private api: MedicalFormService, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.getId();
  }
  postData() {}

  getAll(id: number) {
    this.http.get(this.apiUrl + '/licences/' + id).subscribe((response: any) => {
      if (response && response.code === 200) {
        this.data = response.data;
      }
    });
  }
  getId() {
    this.http.get(this.apiUrl + '/licences').subscribe((response: any) => {
      console.log('id ===>', response);
      if (response && response.code === 200) {
        this.ddpValues = response.data;
        this.getAll(this.ddpValues[0].id);
      }
      console.log('ddp values ==>', this.ddpValues);
    });
  }
  consoleLog(statename: any) {
    this.getAll(statename);
  }
}
// this.api.getMedicalData(5).subscribe((response: any) => {
//   if (response.code === 200) {
//     this.data = response.data;
//     console.log(response);
//     if (parseInt(this.data.license_days_left) <= 0) {
//       this.data.license_days_left = 'EXPIRED';
//     }
//     // if ((this.data) = "") {
//     //   this.data = 'EXPIRED';
//     // }
//   } else {
//     console.log('response ===>', response);
//   }
// });
// this.formValue = this.formbuilder.group({
//   id: [''],
// });

///=====================================//
// this.MedicalFormModelObj.id = this.formValue.value.id;
// this.api.postData(this.MedicalFormModelObj)
// .subscribe(res=>{
//   console.log(res);
//   alert("employee addes successfully")
// },
// err=>
// {
//   alert("something wrong");
// })
// }
