import {Router, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {AuthService} from './Service/auth.service';
import {inject} from '@angular/core';
import {AccueilComponent} from './accueil/accueil.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {CritiqueAttractionComponent} from "./critique/critique-attraction/critique-attraction.component";

export const utilisateurEstConnecte = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn) {
    //Appel pour vérifier token sinon pas bon on redirige vers connexion
    //Mais pas urgent car on vérifie à chaque autre appel, il faut juste faire un appel spécifique pour ça
    return true;
  }

  return router.parseUrl('/login');
};

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [utilisateurEstConnecte]
  },
  {
    path: 'accueil',
    component: AccueilComponent,
  },
  {
    path: 'attraction/:id/critique',
    component: CritiqueAttractionComponent,
  },
  {path: '**', component: PageNotFoundComponent, pathMatch: 'full'},
];
