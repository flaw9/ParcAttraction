import { Router, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from './Service/auth.service';
import { inject } from '@angular/core';
import { AccueilComponent } from './accueil/accueil.component';
import { AvisComponent } from './avis/avis.component';

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


    { path: '*',   redirectTo: '/accueil', pathMatch: 'full' }, 
      {
      path: 'avis',
      component: AvisComponent,
    },

];
