import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList, signal
} from '@angular/core';
import { IFormStepper } from '../models/form-stepper.interface';
import { FormStepComponent } from '../form-step/form-step.component';

@Component({
  selector: 'form-stepper',
  templateUrl: './form-stepper.component.html',
  styleUrl: './form-stepper.component.scss',
})
export class FormStepperComponent implements IFormStepper, AfterContentInit {
  /** Decorators */
  @Input() title!: string;
  @ContentChildren(FormStepComponent, {descendants: true}) steps!: QueryList<FormStepComponent>;

  /** Class properties */
  formSteps = signal<FormStepComponent[]>([]);

  selectedStepIndex = 0;

  /**
   * Life-cycle Methods
   */

  ngOnInit() {}

  ngAfterContentInit() {
    const finalSteps = this.steps.map((step, index) => {
      step.editable = index === this.selectedStepIndex;
      step.hidden = index !== this.selectedStepIndex;
      return step;
    });
    this.formSteps.set(finalSteps);
  }

  /**
   * Public Methods
   */

  public selectStep(index: number) {
    this.selectedStepIndex = index;
    this.formSteps().forEach((step, stepIndex) => {
      step.editable = stepIndex === this.selectedStepIndex;
      step.hidden = stepIndex !== this.selectedStepIndex;
    });
  }

  public onSubmit() {}
}
