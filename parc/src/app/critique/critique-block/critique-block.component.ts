import {Component, Input} from '@angular/core';
import {CritiqueInterface} from "../../Interface/critique.interface";

@Component({
  selector: 'app-critique-block',
  standalone: true,
  imports: [],
  templateUrl: './critique-block.component.html',
  styleUrl: './critique-block.component.scss'
})
export class CritiqueBlockComponent {
  
  @Input() critique: CritiqueInterface | undefined;
  
}
