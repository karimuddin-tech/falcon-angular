import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruisePopupAddComponent } from './cruise-popup-add.component';

describe('PopupComponent', () => {
  let component: CruisePopupAddComponent;
  let fixture: ComponentFixture<CruisePopupAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruisePopupAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CruisePopupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
