import {Component, Input} from '@angular/core';
import {CritiqueInterface} from "../../Interface/critique.interface";
import {CommonModule} from "@angular/common";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {of} from "rxjs";
import {StarComponent} from "../star/star.component";

@Component({
  selector: 'app-critique-block',
  standalone: true,
  imports: [CommonModule, TranslateModule, StarComponent],
  templateUrl: './critique-block.component.html',
  styleUrl: './critique-block.component.scss'
})
export class CritiqueBlockComponent {
  
  @Input() critique: CritiqueInterface | undefined;
  
  constructor(private translate: TranslateService) {
  }

  isValidCritique() {
    return this.critique?.note !== null && this.critique?.commentaire !== null;
  }

  getDisplayedName() {
    if (!this.critique?.nom && !this.critique?.prenom) {
      return this.translate.get('CRITICS_PAGE.ANONYMOUS');
    }
    return of(this.critique?.nom + " " + this.critique?.prenom);
  }
}
