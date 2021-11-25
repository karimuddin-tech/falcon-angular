import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AircraftPopupComponent } from './aircraft-popup.component';
//import { ResetPasswordGuard } from './reset-password/reset-password.gaurd';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Popup',
    pathMatch: 'full',
  },
  {
    path: 'popup',
    component: AircraftPopupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
