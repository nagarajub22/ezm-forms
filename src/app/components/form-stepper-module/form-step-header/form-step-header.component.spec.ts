import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStepHeaderComponent } from './form-step-header.component';

describe('FormStepperHeaderComponent', () => {
  let component: FormStepHeaderComponent;
  let fixture: ComponentFixture<FormStepHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormStepHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormStepHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
