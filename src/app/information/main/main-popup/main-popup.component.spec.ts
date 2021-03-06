import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPopupComponent } from './main-popup.component';

describe('PopupComponent', () => {
  let component: MainPopupComponent;
  let fixture: ComponentFixture<MainPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
