import {
  IZeroFuelWeights,
} from 'src/models/response.interface';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ZeroFuelPopupAddComponent } from './zero-fuel-popup-add/zero-fuel-popup-add.component';

@Component({
  selector: 'app-zero-fuel',
  templateUrl: './zero-fuel.component.html',
  styleUrls: ['./zero-fuel.component.scss'],
})
export class ZeroFuelComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  public data: any;
  public zeroFuelWeights: IZeroFuelWeights[];
  constructor(
    private fb: FormBuilder,
    protected router: Router,
    private http: HttpClient,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    if (localStorage.getItem('flightDetailsId') !== null) this.flights();
  }
  openAdd() {
    const dialogRef = this.dialog.open(ZeroFuelPopupAddComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('data ===>', this.data);
      if (localStorage.getItem('flightDetailsId') !== null) this.flights();
    });
  }
  flights() {
    this.http
      .get(this.apiUrl + '/flights/' + localStorage.getItem('serial_no'))
      .subscribe((response: any) => {
        if (response && response.code === 200) {
          this.zeroFuelWeights = response.data.ZeroFuelWeights;
        } else {
          console.log('response ===>', response);
        }
      });
  }
    /**
   * edit
   * id: number
   **/
     public edit(id: number) {
      const dialogRef = this.dialog.open(ZeroFuelPopupAddComponent, {
        data: this.zeroFuelWeights.filter((a) => a.id === id),
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (localStorage.getItem('flightDetailsId') !== null) this.flights();
      });
    }
}
