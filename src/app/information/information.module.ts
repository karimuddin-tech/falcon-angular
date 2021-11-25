import { MainPopupComponent } from './main/main-popup/main-popup.component';
import { AircraftPopupComponent } from './aircraft/aircraft-popup/aircraft-popup.component';
import { CruisePopupAddComponent } from './cruise-data/cruise-popup-add/cruise-popup-add.component';
import { DelayPopupAddComponent } from './delay/delay-popup-add/delay-popup-add.component';
import { EnginePopupAddComponent } from './engine-data/engine-popup-add/engine-popup-add.component';
import { PassPopupAddComponent } from './passenger-data/pass-popup-add/pass-popup-add.component';
import { PilotPopupAddComponent } from './pilot-data/pilot-popup-add/pilot-popup-add.component';
import { FuelPopupAddComponent } from './fuel/fuel-popup-add/fuel-popup-add.component';
import { ZeroFuelPopupAddComponent } from './zero-fuel/zero-fuel-popup-add/zero-fuel-popup-add.component';
import { FlightDataPopupAddComponent } from './flight-data/flight-data-popup-add/flight-data-popup-add.component';
import { EngineDataComponent } from './engine-data/engine-data.component';
import { PassengerDataComponent } from './passenger-data/passenger-data.component';
import { FuelComponent } from './fuel/fuel.component';
import { ZeroFuelComponent } from './zero-fuel/zero-fuel.component';
import { DelayComponent } from './delay/delay.component';
import { RemarksComponent } from './remarks/remakrs.component';
import { MainComponent } from './main/main.component';
import { PilotDataComponent } from './pilot-data/pilot-data.component';
import { CruiseDataComponent } from './cruise-data/cruise-data.component';
import { HeaderDataComponent } from './header-data/header-data.component';
import { FlightDataComponent } from './flight-data/flight-data.component';
import { AircraftComponent } from './aircraft/aircraft.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformationRoutingModule } from './information.routing.module';
import { DatePipe } from '@angular/common';
import { AngularMaterialModule } from 'src/shared/angular material components/material.module';



@NgModule({
  declarations: [
AircraftComponent,
FlightDataComponent,
HeaderDataComponent,
CruiseDataComponent,
PilotDataComponent,
MainComponent,
RemarksComponent,
DelayComponent,
ZeroFuelComponent,
FuelComponent,
PassengerDataComponent,
EngineDataComponent,
FlightDataPopupAddComponent,
ZeroFuelPopupAddComponent,
FuelPopupAddComponent,
PilotPopupAddComponent,
PassPopupAddComponent,
EnginePopupAddComponent,
DelayPopupAddComponent,
CruisePopupAddComponent,
AircraftPopupComponent,
MainPopupComponent,


  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InformationRoutingModule,
    AngularMaterialModule,
    FormsModule,
    BrowserModule,

  ],
  providers: [DatePipe],
})
export class InformationModule {}
