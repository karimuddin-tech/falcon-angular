import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDataPopupAddComponent } from './flight-data-popup-add.component';

describe('PopupComponent', () => {
  let component: FlightDataPopupAddComponent;
  let fixture: ComponentFixture<FlightDataPopupAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightDataPopupAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightDataPopupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
