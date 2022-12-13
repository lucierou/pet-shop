import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';
import { PetListComponent } from './pet/pet-index/pet-list/pet-list.component';
import { PetDetailComponent } from './pet/pet-index/pet-detail/pet-detail.component';
import { PetListItemComponent } from './pet/pet-index/pet-list/pet-list-item/pet-list-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddPetComponent } from './pet/add-pet/add-pet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PetIndexComponent } from './pet/pet-index/pet-index.component';


@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    NavbarComponent,
    AddPetComponent,
    HomeComponent,
    PetIndexComponent,
    PetDetailComponent,
    PetListComponent,
    PetListItemComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
