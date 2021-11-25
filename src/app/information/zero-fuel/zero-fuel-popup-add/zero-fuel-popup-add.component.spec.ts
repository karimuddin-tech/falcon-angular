import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroFuelPopupAddComponent } from './zero-fuel-popup-add.component';

describe('PopupComponent', () => {
  let component: ZeroFuelPopupAddComponent;
  let fixture: ComponentFixture<ZeroFuelPopupAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeroFuelPopupAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroFuelPopupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
