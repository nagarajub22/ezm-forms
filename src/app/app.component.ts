import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormStepperModule } from './components/form-stepper-module/form-stepper.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormService } from './services/form.service';
import { FORM_1_DATA } from './form-data/form1';
import { FormControlTypeComponent } from './form-control-type/form-control-type.component';
import { IFormUI } from './models/form-ui.model';
import { FormStepperComponent } from './components/form-stepper-module/form-stepper/form-stepper.component';
import { combineLatest, concatAll, debounce, debounceTime, from, merge, reduce } from 'rxjs';
import { FormValueReportComponent } from './form-value-report/form-value-report.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormStepperModule,
    FormControlTypeComponent,
    FormValueReportComponent
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

  showReport = true;
  finalValues!: {[key:string]: any};

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
    merge(
        this.formGroups[0].valueChanges,
        this.formGroups[1].valueChanges,
        this.formGroups[2].valueChanges,
        this.formGroups[3].valueChanges,
        this.formGroups[4].valueChanges
    ).subscribe(_ => {
      console.log(_);
    })
  }

  /**
   * Public Methods
   */
  onAction(type: string) {
    if(type === 'next') {
      this.stepperForm.selectStep(this.stepperForm.selectedStepIndex + 1);
    } else if (type === 'previous') {
      this.stepperForm.selectStep(this.stepperForm.selectedStepIndex - 1);
    } else if (type === 'complete') {
      const formValues = this.formGroups.reduce((value, group) => {
        value = {
          ...value,
          ...group.value
        }
        return value; 
      }, {} as any);
      this.generateReport(formValues);
      this.showReport = true;
    }
  }

  /** Private Methods */
  private buildFormData() {}
  private generateReport(formValues: any) {
    this.finalValues = formValues;
    console.log(formValues);
  }
}
