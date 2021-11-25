import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftPopupComponent } from './aircraft-popup.component';

describe('PopupComponent', () => {
  let component: AircraftPopupComponent;
  let fixture: ComponentFixture<AircraftPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AircraftPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
