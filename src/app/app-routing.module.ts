import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AddPetComponent } from "./pet/add-pet/add-pet.component";
import { PetDetailComponent } from "./pet/pet-detail/pet-detail.component";
import { PetListComponent } from "./pet/pet-list/pet-list.component";
import { PetComponent } from "./pet/pet.component";


const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'pet', component: PetComponent,
        children: [
            {path: 'detail', component: PetDetailComponent},
            {path: 'list', component: PetListComponent},
            {path: 'addpet', component: AddPetComponent},
            {path: '**', redirectTo: ''},
        ]
    },
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
