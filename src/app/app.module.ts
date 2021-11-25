import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformationModule } from './information/information.module';
import { ApiInterceptor } from './error-interceptor';
import { MedicalformComponent } from './medicalform/medicalform.component';
import { AddMadicalFormComponent } from './medicalform/add-madical-form/add-madical-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicalformComponent,
    AddMadicalFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    InformationModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule { }
