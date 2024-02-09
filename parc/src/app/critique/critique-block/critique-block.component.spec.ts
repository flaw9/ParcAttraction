import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CritiqueBlockComponent } from './critique-block.component';

describe('CritiqueBlockComponent', () => {
  let component: CritiqueBlockComponent;
  let fixture: ComponentFixture<CritiqueBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CritiqueBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CritiqueBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
