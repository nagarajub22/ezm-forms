import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlTypeComponent } from './form-control-type.component';

describe('FormControlTypeComponent', () => {
  let component: FormControlTypeComponent;
  let fixture: ComponentFixture<FormControlTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControlTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormControlTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
