import { NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { AttractionService } from '../Service/attraction.service';
import { AvisService } from '../Service/avis.service';

@Component({
  selector: 'app-form-avis-popup',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatButton,
    ReactiveFormsModule,
    MatInput,
    NgIf
  ],
  templateUrl: './form-avis-popup.component.html',
  styleUrl: './form-avis-popup.component.scss'
})
export class FormAvisPopupComponent implements OnInit{
  public formControl: FormGroup = new FormGroup({
    note: new FormControl('', [Validators.required, Validators.min(0), Validators.max(20)]),
    texte: new FormControl('', [Validators.required]),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    critique_id: new FormControl('')
  });
  public data: any;

  constructor(private avisService: AvisService,
      @Inject(MAT_DIALOG_DATA) data: any,
      private dialogRef: MatDialogRef<FormAvisPopupComponent>) {
      this.data = data;
    }

  ngOnInit(): void {
    if (this.data.critique) {
      this.formControl.setValue(this.data.critique);
    }
  }

  public submit() {
    if (this.formControl.invalid) {
      return;
    }
    this.formControl.addControl('attraction_id', new FormControl(this.data.attraction_id));
    this.avisService.postAvis(this.formControl.value, this.data.attraction_id).subscribe((res) => {
      this.dialogRef.close( { data: res });
    });
  }

}
