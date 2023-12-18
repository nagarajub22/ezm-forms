import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValueReportComponent } from './form-value-report.component';

describe('FormValueReportComponent', () => {
  let component: FormValueReportComponent;
  let fixture: ComponentFixture<FormValueReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormValueReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormValueReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
