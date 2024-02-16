import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {AttractionService} from "../../Service/attraction.service";

@Component({
  selector: 'app-critique-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatButton,
    ReactiveFormsModule,
    MatInput,
    NgIf
  ],
  templateUrl: './critique-dialog.component.html',
  styleUrl: './critique-dialog.component.scss'
})
export class CritiqueDialogComponent {
  public formControl: FormGroup = new FormGroup({
    note: new FormControl('', [Validators.required, Validators.min(0), Validators.max(20)]),
    commentaire: new FormControl('', [Validators.required]),
    nom: new FormControl(''),
    prenom: new FormControl('')
  });
  public data: any;
  
  constructor(private attractionService: AttractionService,
              @Inject(MAT_DIALOG_DATA) data: any,
              private dialogRef: MatDialogRef<CritiqueDialogComponent>) {
    this.data = data;
  }

  public submit() {
    if (this.formControl.invalid) return;
    
    this.formControl.addControl('attraction_id', new FormControl(this.data.attraction_id));
    this.attractionService.postCritique(this.formControl.value).subscribe((res) => {
      this.dialogRef.close( { data: res });
    });
  }
}
