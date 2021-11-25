import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnginePopupAddComponent } from './engine-popup-add.component';

describe('PopupComponent', () => {
  let component: EnginePopupAddComponent;
  let fixture: ComponentFixture<EnginePopupAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnginePopupAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnginePopupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
