import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormStepperModule } from './components/form-stepper-module/form-stepper.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormService } from './services/form.service';
import { FORM_1_DATA } from './form-data/form1';
import { FormControlTypeComponent } from './form-control-type/form-control-type.component';
import { IFormUI } from './models/form-ui.model';
import { FormStepperComponent } from './components/form-stepper-module/form-stepper/form-stepper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormStepperModule,
    FormControlTypeComponent
  ],
  providers: [
    FormService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  @ViewChild(FormStepperComponent) stepperForm!: FormStepperComponent;

  title = 'ez-management';

  formData = FORM_1_DATA as unknown as IFormUI;
  formGroups!: FormGroup[];

  /**
   * 
   * @param fb: Angular FormBuilder
   * @param formService: Internal Form service to convert the json to usable data
   */

  constructor(
    private readonly formService: FormService
  ) {
    this.buildFormData();
    this.formGroups = this.formService.buildFormGroup(this.formData);
  }

  ngOnInit() {
    
  }

  /**
   * Public Methods
   */
  onAction(type: string) {
    if(type === 'next') {
      this.stepperForm.selectStep(this.stepperForm.selectedStepIndex + 1);
    } else if (type === 'previous') {
      this.stepperForm.selectStep(this.stepperForm.selectedStepIndex - 1);
    }
  }

  /** Private Methods */
  private buildFormData() {}
}
