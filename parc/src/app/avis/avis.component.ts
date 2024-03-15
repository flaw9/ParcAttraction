import { Component } from '@angular/core';

@Component({
  selector: 'app-avis',
  standalone: true,
  imports: [],
  templateUrl: './avis.component.html',
  styleUrl: './avis.component.scss'
})
    getCritiques(): void {
    this.attractionService.getCritique(this.attraction_id ?? -1).subscribe(critiques => {
      this.critiques = critiques.critiques;
      this.mean = critiques.mean;
    });
  }
export class AvisComponent {

}
