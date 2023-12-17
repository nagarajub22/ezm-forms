import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { IFormStep, IFormStepError } from '../models/form-stepper.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-step',
  templateUrl: './form-step.component.html',
  styleUrl: './form-step.component.scss'
})
export class FormStepComponent implements IFormStep, OnInit {
  
  @Input() title!: string;
  @Input() index!: number;
  @Input() formGroup!: FormGroup;

  public completed!: boolean;
  public editable!: boolean;

  public hidden = true;

  public error: IFormStepError[] = [];

  @HostBinding('class.hidden')
  get visibility() {
    return !this.hidden;
  }

  ngOnInit() {
    console.log(this.formGroup.value);
  }

}
