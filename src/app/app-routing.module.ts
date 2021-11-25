import { MedicalformComponent } from './medicalform/medicalform.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './information/main/main.component';
import { AddMadicalFormComponent } from './medicalform/add-madical-form/add-madical-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inforform',
    pathMatch: 'full',
  },
  {
    path: 'inforform',
    component: MainComponent,
  },
  {
    path: 'addmedical',
    component: AddMadicalFormComponent,
  },
  {
    path: 'medicalform',
    component: MedicalformComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
