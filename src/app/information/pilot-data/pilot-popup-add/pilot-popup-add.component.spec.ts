import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotPopupAddComponent } from './pilot-popup-add.component';

describe('PopupComponent', () => {
  let component: PilotPopupAddComponent;
  let fixture: ComponentFixture<PilotPopupAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotPopupAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotPopupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
