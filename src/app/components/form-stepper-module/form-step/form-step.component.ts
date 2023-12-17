import { Component, HostBinding, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { IFormStep, IFormStepError } from '../models/form-stepper.interface';
import { FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'form-step',
  templateUrl: './form-step.component.html',
  styleUrl: './form-step.component.scss'
})
export class FormStepComponent implements IFormStep, OnInit, OnDestroy {
  
  @Input() title!: string;
  @Input() index!: number;
  @Input() formGroup!: FormGroup;

  public completed!: boolean;
  public editable!: boolean;

  public hidden = true;

  public error: IFormStepError[] = [];

  private destroy$ = new Subject();

  @HostBinding('class.hidden')
  get visibility() {
    return !this.hidden;
  }

  ngOnInit() {
    this.formGroup.statusChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe(_ => {
      this.completed = _ === 'VALID';
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
