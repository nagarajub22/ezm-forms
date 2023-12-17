import { Component, Input } from '@angular/core';
import { IFormUIControl, IFromUIControlType } from '../models/form-ui.model';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'form-control-type',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-control-type.component.html',
  styleUrl: './form-control-type.component.scss',
})
export class FormControlTypeComponent {
  @Input() control!: IFormUIControl;
  @Input() fgControl!: any;

  get controlTypes() {
    return IFromUIControlType;
  }
}
