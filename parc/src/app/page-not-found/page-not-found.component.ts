import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    MatCardModule,
    RouterLink,
    MatButton
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

}