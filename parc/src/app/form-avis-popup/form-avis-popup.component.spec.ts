import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAvisPopupComponent } from './form-avis-popup.component';

describe('FormAvisPopupComponent', () => {
  let component: FormAvisPopupComponent;
  let fixture: ComponentFixture<FormAvisPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAvisPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAvisPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
