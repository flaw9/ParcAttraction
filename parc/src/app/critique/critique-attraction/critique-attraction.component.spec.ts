import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CritiqueAttractionComponent } from './critique-attraction.component';

describe('CritiqueAttractionComponent', () => {
  let component: CritiqueAttractionComponent;
  let fixture: ComponentFixture<CritiqueAttractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CritiqueAttractionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CritiqueAttractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
