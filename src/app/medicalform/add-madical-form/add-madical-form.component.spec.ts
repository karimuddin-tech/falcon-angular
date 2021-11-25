import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMadicalFormComponent } from './add-madical-form.component';

describe('AddMadicalFormComponent', () => {
  let component: AddMadicalFormComponent;
  let fixture: ComponentFixture<AddMadicalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMadicalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMadicalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
