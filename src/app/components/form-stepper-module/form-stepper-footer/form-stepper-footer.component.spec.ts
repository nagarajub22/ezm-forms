import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStepperFooterComponent } from './form-stepper-footer.component';

describe('FormStepperFooterComponent', () => {
  let component: FormStepperFooterComponent;
  let fixture: ComponentFixture<FormStepperFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormStepperFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormStepperFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
