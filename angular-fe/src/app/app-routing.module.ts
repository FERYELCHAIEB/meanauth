import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';


import { AuthentGuard } from './authent.guard';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexComponent } from './connex/connex.component';
import { VisitComponent } from './visit/visit.component';
import { VisityComponent } from './visity/visity.component';
import { MonComponent } from './mon/mon.component';
import { ForComponent } from './for/for.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { ProfilComponent } from './profil/profil.component';
import { ErreurComponent } from './erreur/erreur.component';
import { AssociationComponent } from './association/association.component';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'accueil',
    component:AccueilComponent
  },
  {
    path:'connex',
    component:ConnexComponent
  },
  {
    path:'visit',
    component:VisitComponent
  },
  {
    path:'visity',
    component:VisityComponent
  },
  {
    path:'mon',
    component:MonComponent
  },
  {
    path:'for',
    component:ForComponent
  },
  {
    path:'inscription',
    component:InscriptionComponent
  },
  {
    path:'connexion',
    component:ConnexionComponent
  },
  {
    path:'reservation',
    component:ReservationComponent,
    canActivate:[AuthentGuard]
  },
  {
    path:'contact',
    component:ContactComponent,
    canActivate:[AuthentGuard]
  },
  {
    path:'annonce',
    component:AnnonceComponent,
    canActivate:[AuthentGuard]
  },
  {
    path:'profil',
    component:ProfilComponent,
    canActivate:[AuthentGuard]
  },
  {
    path:'association',
    component:AssociationComponent
  },
  {
    path:'test',
    component:TestComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },

  {
    path:'**',
    component:ErreurComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
