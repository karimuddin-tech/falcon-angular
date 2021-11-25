import {
  IEngineStarts,
  IFlightDetailsResponse,
} from 'src/models/response.interface';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EnginePopupAddComponent } from './engine-popup-add/engine-popup-add.component';

@Component({
  selector: 'app-engine-data',
  templateUrl: './engine-data.component.html',
  styleUrls: ['./engine-data.component.scss'],
})
export class EngineDataComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  public data: any;
  public engineStarts: IEngineStarts[];
  constructor(
    private fb: FormBuilder,
    protected router: Router,
    private http: HttpClient,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('serial_no') !== null) this.flights();
  }
  openAdd() {
    const dialogRef = this.dialog.open(EnginePopupAddComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('data ===>', this.data);
      if (localStorage.getItem('serial_no') !== null) this.flights();
    });
  }
  flights() {
    this.http
      .get(this.apiUrl + '/flights/' + localStorage.getItem('serial_no'))
      .subscribe((response: any) => {
        if (response && response.code == 200) {
          this.engineStarts = response.data.EngineStarts;
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
      const dialogRef = this.dialog.open(EnginePopupAddComponent, {
        data: this.engineStarts.filter((a) => a.id === id),
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (localStorage.getItem('serial_no') !== null) this.flights();
      });
    }
}
