import { Component, OnInit } from '@angular/core';
import { AvisService } from '../Service/avis.service';
import { AvisInterface } from '../Interface/avis.interface';
import { Observable } from 'rxjs';
import {ActivatedRoute, RouterLink, RouterModule} from '@angular/router';
import {map} from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormAvisPopupService } from '../form-avis-popup/form-avis-popup.service';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { FormAvisPopupComponent } from '../form-avis-popup/form-avis-popup.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-avis',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink, MatDialogModule],
  templateUrl: './avis.component.html',
  styleUrl: './avis.component.scss'
})
export class AvisComponent implements OnInit {
  public attraction_id : any
  public avis: Observable<AvisInterface[]> | undefined
  constructor(private route: ActivatedRoute, 
              private avisService: AvisService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.attraction_id = +this.route.snapshot.params['id'];
    this.avis = this.avisService.getAvisFromAttraction(this.attraction_id);
  }

  getAvis() {
    this.avis = this.avisService.getAvisFromAttraction(this.attraction_id);
  }

  openDialog(avis: AvisInterface | undefined = undefined) {
    const dialogRef = this.dialog.open(FormAvisPopupComponent, {
      width: '500px',
      data: {attraction_id: this.attraction_id ?? -1, critique: avis}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result?.data?.message) {
        this.snackBar.open(result?.data?.message, '', {
          duration: 2000,
        });
      }
      if (result?.data?.result) this.getAvis();
    });
  }

  getName(avis: any) {
    if(avis.nom == "" && avis.prenom == "") {
      return "Anonyme"
    }
    return avis?.prenom + " " + avis?.nom
  }
}