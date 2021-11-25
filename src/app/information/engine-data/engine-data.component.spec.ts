import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineDataComponent } from './engine-data.component';

describe('EngineDataComponent', () => {
  let component: EngineDataComponent;
  let fixture: ComponentFixture<EngineDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
