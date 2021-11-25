import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroFuelComponent } from './zero-fuel.component';

describe('DelayComponent', () => {
  let component: ZeroFuelComponent;
  let fixture: ComponentFixture<ZeroFuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeroFuelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroFuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
