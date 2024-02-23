import { Component, OnInit } from '@angular/core';
import { AvisService } from '../Service/avis.service';
import { AvisInterface } from '../Interface/avis.interface';
import { Observable } from 'rxjs';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-avis',
  standalone: true,
  imports: [],
  templateUrl: './avis.component.html',
  styleUrl: './avis.component.scss'
})
export class AvisComponent implements OnInit {
  public id : any
  public avis: Observable<AvisInterface[]> | undefined
  constructor(private route: ActivatedRoute, private avisService: AvisService)
  {
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.avis = this.avisService.getAvisFromAttraction(this.id);
  }

}
