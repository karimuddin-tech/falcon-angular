import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseDataComponent } from './cruise-data.component';

describe('CruiseDataComponent', () => {
  let component: CruiseDataComponent;
  let fixture: ComponentFixture<CruiseDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruiseDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CruiseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
