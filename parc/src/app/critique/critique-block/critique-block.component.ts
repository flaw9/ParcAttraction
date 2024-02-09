import {Component, Input} from '@angular/core';
import {CritiqueInterface} from "../../Interface/critique.interface";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-critique-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './critique-block.component.html',
  styleUrl: './critique-block.component.scss'
})
export class CritiqueBlockComponent {
  
  @Input() critique: CritiqueInterface | undefined;

  isValidCritique() {
    return this.critique?.note && this.critique?.commentaire;
  }
}
