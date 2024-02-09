import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CritiqueDialogComponent } from './critique-dialog.component';

describe('CritiqueDialogComponent', () => {
  let component: CritiqueDialogComponent;
  let fixture: ComponentFixture<CritiqueDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CritiqueDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CritiqueDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
