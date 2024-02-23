import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './Service/auth.service';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'parc';

  constructor(public authService: AuthService, public router: Router, public translate: TranslateService) {
    this.authService.setUser();
    translate.addLangs(['fr', 'en']);
    translate.setDefaultLang('fr');
    
    const browserLang = translate.getBrowserLang() || 'fr';
    translate.use(browserLang.match(/fr|en/) ? browserLang : 'fr');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

}
