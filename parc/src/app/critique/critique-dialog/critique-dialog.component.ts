import { Component } from '@angular/core';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-critique-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButton
  ],
  templateUrl: './critique-dialog.component.html',
  styleUrl: './critique-dialog.component.scss'
})
export class CritiqueDialogComponent {

}
