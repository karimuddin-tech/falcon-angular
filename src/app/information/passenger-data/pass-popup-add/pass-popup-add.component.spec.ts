import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassPopupAddComponent } from './pass-popup-add.component';

describe('PopupComponent', () => {
  let component: PassPopupAddComponent;
  let fixture: ComponentFixture<PassPopupAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassPopupAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassPopupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
