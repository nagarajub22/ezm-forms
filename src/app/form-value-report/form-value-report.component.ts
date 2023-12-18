import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-value-report',
  standalone: true,
  imports: [],
  templateUrl: './form-value-report.component.html',
  styleUrl: './form-value-report.component.scss'
})
export class FormValueReportComponent {
  @Input() value!: {[key:string]: any};
}
