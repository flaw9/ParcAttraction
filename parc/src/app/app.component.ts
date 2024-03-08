import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './Service/auth.service';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule, TranslateModule, MatIcon, MatMenu, MatMenuTrigger, MatMenuItem],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'parc';
  langs = ['fr', 'en'];

  constructor(public authService: AuthService, public router: Router, public translate: TranslateService) {
    this.authService.setUser();
    this.translate.addLangs(this.langs);
    this.translate.setDefaultLang('fr');
    
    const browserLang = translate.getBrowserLang() || 'fr';
    this.translate.use(browserLang.match(/fr|en/) ? browserLang : 'fr');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
