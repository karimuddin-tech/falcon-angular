import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayPopupAddComponent } from './delay-popup-add.component';

describe('PopupComponent', () => {
  let component: DelayPopupAddComponent;
  let fixture: ComponentFixture<DelayPopupAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelayPopupAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelayPopupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
