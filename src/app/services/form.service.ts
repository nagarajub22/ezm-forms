import { Injectable } from '@angular/core';
import {
    FormBuilder, FormControl, FormGroup,
    Validators
} from '@angular/forms';
import { IFormUI, IFormUIStep } from '../models/form-ui.model';


@Injectable()
export class FormService {
  constructor(private _fb: FormBuilder) {}

  buildFormGroup(formData: IFormUI): FormGroup[] {
    return formData.steps.map((step) => {
      return this.buildFormGroupForStep(step);
    });
  }

  private buildFormGroupForStep(step: IFormUIStep): FormGroup {
    const formControls: {
      [key: string]: FormControl
    } = {};
    if (step?.controls?.length > 0) {
      step?.controls?.forEach(control => {
        const validators = [];
        if(control.required) {
          validators.push(Validators.required);
        }

        formControls[control.id] = new FormControl<string>('', validators);
      });
    }
    return this._fb.group(formControls);
  }
}
