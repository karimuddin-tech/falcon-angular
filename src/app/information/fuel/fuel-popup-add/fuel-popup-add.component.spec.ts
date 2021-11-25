import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelPopupAddComponent } from './fuel-popup-add.component';

describe('PopupComponent', () => {
  let component: FuelPopupAddComponent;
  let fixture: ComponentFixture<FuelPopupAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelPopupAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelPopupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
