import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
  computed,
  signal,
} from '@angular/core';
import { IFormStep, IFormStepper } from '../models/form-stepper.interface';
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

  selectedIndex = 0;
  /**
   * Life-cycle Methods
   */

  ngOnInit() {

  }

  ngAfterContentInit() {
    const finalSteps = this.steps.map((step) => {
      return step;
    });
    this.formSteps.set(finalSteps);
  }

  /**
   * Public Methods
   */
  public onSubmit() {}

  public changeStep(index: number) {
    this.formSteps().forEach((step, stepIndex) => {
      step.hidden = index === stepIndex ? false : true;
    })
  }
}
