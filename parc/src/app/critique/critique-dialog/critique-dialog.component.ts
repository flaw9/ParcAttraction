import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {AttractionService} from "../../Service/attraction.service";
import {TranslateModule} from "@ngx-translate/core";
import {StarComponent} from "../star/star.component";

@Component({
  selector: 'app-critique-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatButton,
    ReactiveFormsModule,
    MatInput,
    NgIf,
    TranslateModule,
    StarComponent
  ],
  templateUrl: './critique-dialog.component.html',
  styleUrl: './critique-dialog.component.scss'
})
export class CritiqueDialogComponent implements OnInit {
  public formControl: FormGroup = new FormGroup({
    note: new FormControl(1, [Validators.required, Validators.min(0), Validators.max(5)]),
    commentaire: new FormControl('', [Validators.required]),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    critique_id: new FormControl(''),
    attraction_nom: new FormControl('')
  });
  public data: any;
  
  constructor(private attractionService: AttractionService,
              @Inject(MAT_DIALOG_DATA) data: any,
              private dialogRef: MatDialogRef<CritiqueDialogComponent>) {
    this.data = data;
  }
  
  ngOnInit(): void {
    if (this.data.critique) {
      this.formControl.setValue(this.data.critique);
    }
  }

  public submit() {
    if (this.formControl.invalid) return;
    
    this.formControl.addControl('attraction_id', new FormControl(this.data.attraction_id));
    this.attractionService.postCritique(this.formControl.value).subscribe((res) => {
      this.dialogRef.close( { data: res });
    });
  }
  
  public changeNote(note: number) {
    this.formControl.get('note')?.setValue(note);
  }
}
