import { Component, Input } from '@angular/core';
import { IFormStep } from '../models/form-stepper.interface';

@Component({
  selector: 'form-stepper-header',
  templateUrl: './form-step-header.component.html',
  styleUrl: './form-step-header.component.scss'
})
export class FormStepHeaderComponent {
  @Input() title!: string;
  @Input({required: true}) steps!: IFormStep[];
}
