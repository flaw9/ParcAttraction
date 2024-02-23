import {Component, OnInit} from '@angular/core';
import {AttractionService} from "../../Service/attraction.service";
import {ActivatedRoute} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {CritiqueInterface} from "../../Interface/critique.interface";
import {CritiqueBlockComponent} from "../critique-block/critique-block.component";
import {MatButton} from "@angular/material/button";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {CritiqueDialogComponent} from "../critique-dialog/critique-dialog.component";
import {AuthService} from "../../Service/auth.service";
import {CritiqueService} from "../../Service/critique.service";
import {MatSnackBar} from "@angular/material/snack-bar";

// Page comportant les critiques pour une attraction donnée
@Component({
  selector: 'app-critique-attraction',
  standalone: true,
  imports: [
    MatCardModule, CommonModule, CritiqueBlockComponent, MatButton, MatDialogModule
  ],
  templateUrl: './critique-attraction.component.html',
  styleUrl: './critique-attraction.component.scss'
})
export class CritiqueAttractionComponent implements OnInit {
  
  public critiques: CritiqueInterface[] | undefined;
  public attraction_id: number | undefined;
  
  constructor(private attractionService: AttractionService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private authService: AuthService,
              private critiqueService: CritiqueService,
              private snackBar: MatSnackBar) {
  }
  
  isLoggedIn: boolean = this.authService.isLoggedIn;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.attraction_id = params['id'];
      this.getCritiques();
    });
  }
  
  getCritiques(): void {
    this.attractionService.getCritique(this.attraction_id ?? -1).subscribe(critiques => {
      this.critiques = critiques;
    });
  }

  getAttractionName() {
    return this.critiques ? this.critiques[0]?.attraction_nom : '';
  }

  openDialog(critique: CritiqueInterface | undefined = undefined) {
    const dialogRef = this.dialog.open(CritiqueDialogComponent, {
      width: '500px',
      data: {attraction_id: this.attraction_id ?? -1, critique: critique}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result?.data?.message) {
        this.snackBar.open(result?.data?.message, '', {
          duration: 2000,
        });
      }
      if (result?.data?.result) this.getCritiques();
    });
  }

  deleteCritique(critique: CritiqueInterface) {
    let id = critique.critique_id ?? -1;
    this.critiqueService.deleteCritique(id).subscribe((res) => {
      this.snackBar.open(res.message, '', {
        duration: 2000,
      });
      this.getCritiques();
    });
  }
}
