import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule}from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {
  ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule
} from 'ngx-toastr';
import { ContactComponent } from './contact/contact.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ProfilComponent } from './profil/profil.component';
import { ErreurComponent } from './erreur/erreur.component';
import { MonComponent } from './mon/mon.component';
import { ForComponent } from './for/for.component';
import { ConnexComponent } from './connex/connex.component';
import { AccueilComponent } from './accueil/accueil.component';
import { VisitComponent } from './visit/visit.component';
import { VisityComponent } from './visity/visity.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { AssociationComponent } from './association/association.component';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';

 

@NgModule({
  declarations: [
    AppComponent,
    
    
    ConnexionComponent,
    HomeComponent,
    InscriptionComponent,
    ContactComponent,
    ReservationComponent,
    ProfilComponent,
    ErreurComponent,
    MonComponent,
    ForComponent,
    ConnexComponent,
    AccueilComponent,
    VisitComponent,
    VisityComponent,
    AnnonceComponent,
    AssociationComponent,
    TestComponent,
    DashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
