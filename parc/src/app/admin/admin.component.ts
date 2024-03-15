import {Component} from '@angular/core';
import {Observable, tap} from 'rxjs';
import {AttractionInterface} from '../Interface/attraction.interface';
import {AttractionService} from '../Service/attraction.service';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatButtonModule, MatCardModule, TranslateModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  public formulaireAttractions: FormGroup[] = [];

  constructor(public attractionService: AttractionService,
              private _snackBar: MatSnackBar) {
  }

  public attractions: Observable<AttractionInterface[]> = this.attractionService.getAllAttraction().pipe(
    tap((attractions: AttractionInterface[]) => {
      attractions.forEach(attraction => {
        this.formulaireAttractions.push(
          new FormGroup({
            attraction_id: new FormControl(attraction.attraction_id),
            nom: new FormControl(attraction.nom, [Validators.required]),
            description: new FormControl(attraction.description, [Validators.required]),
            difficulte: new FormControl(attraction.difficulte),
            visible: new FormControl(attraction.visible)
          })
        );
      });
    }));

  public onSubmit(attractionFormulaire: FormGroup) {
    if (attractionFormulaire.invalid) {
      this._snackBar.open("Erreur dans les champs");
      return;
    }

    this.attractionService.postAttraction(attractionFormulaire.getRawValue()).subscribe(result => {
      attractionFormulaire.patchValue({attraction_id: result.result});
      this._snackBar.open(result.message, undefined, {
        duration: 1000
      });
    });
  }

  public addAttraction() {
    const group = new FormGroup({
      attraction_id: new FormControl(),
      nom: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      difficulte: new FormControl(),
      visible: new FormControl(true)
    });
    group.markAsDirty()
    this.formulaireAttractions.push(group);
  }
}
