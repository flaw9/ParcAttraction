import {Component, OnInit} from '@angular/core';
import {AttractionService} from "../../Service/attraction.service";
import {ActivatedRoute} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {CritiqueInterface} from "../../Interface/critique.interface";
import {CritiqueBlockComponent} from "../critique-block/critique-block.component";

@Component({
  selector: 'app-critique-attraction',
  standalone: true,
  imports: [
    MatCardModule, CommonModule, CritiqueBlockComponent
  ],
  templateUrl: './critique-attraction.component.html',
  styleUrl: './critique-attraction.component.scss'
})
export class CritiqueAttractionComponent implements OnInit {
  
  public critiques: CritiqueInterface[] | undefined;
  
  constructor(private attractionService: AttractionService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.attractionService.getCritique(params['id']).subscribe(critiques => {
        this.critiques = critiques;
      });
    });
  }

  getAttractionName() {
    return this.critiques ? this.critiques[0].attraction_nom : '';
  }
}
