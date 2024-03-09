import {Component, OnInit} from '@angular/core';
import {AttractionService} from '../Service/attraction.service';
import {CommonModule} from '@angular/common';
import {Observable} from 'rxjs';
import {AttractionInterface} from '../Interface/attraction.interface';
import {MatCardModule} from '@angular/material/card';
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {StarComponent} from "../critique/star/star.component";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButton, RouterLink, TranslateModule, StarComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent implements OnInit {
  
  // @ts-ignore
  public attractions: Observable<AttractionInterface[]>;
  public means: Map<number, Observable<any>> = new Map<number, Observable<any>>();

  constructor(public attractionService: AttractionService) {
  }

  ngOnInit(): void {
    this.attractions = this.attractionService.getAllAttractionVisible();
    this.attractions.subscribe((data) => {
      for (let attraction of data) {
        this.means.set(attraction.attraction_id ?? -1, this.attractionService.getMeanAttraction(attraction.attraction_id ?? -1));
      }
    });
  }
}
