import { AircraftComponent } from './aircraft/aircraft.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HeaderDataComponent } from './header-data/header-data.component';

const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class InformationRoutingModule { }
