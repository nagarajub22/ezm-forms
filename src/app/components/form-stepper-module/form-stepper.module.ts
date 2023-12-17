import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormStepperComponent } from './form-stepper/form-stepper.component';
import { FormStepComponent } from './form-step/form-step.component';
import { FormStepHeaderComponent } from './form-step-header/form-step-header.component';
import { FormStepperFooterComponent } from './form-stepper-footer/form-stepper-footer.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormStepperComponent,
    FormStepComponent,
    FormStepHeaderComponent,
    FormStepperFooterComponent
  ],
  exports: [
    FormStepperComponent,
    FormStepComponent,
    FormStepHeaderComponent,
    FormStepperFooterComponent
  ]
})
export class FormStepperModule { }
