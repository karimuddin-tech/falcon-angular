import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotDataComponent } from './pilot-data.component';

describe('PilotDataComponent', () => {
  let component: PilotDataComponent;
  let fixture: ComponentFixture<PilotDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
