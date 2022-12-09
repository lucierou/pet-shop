import { Component } from "@angular/core";
import { PetService } from "./pet.service";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent {
  constructor(private petService: PetService) {
  }

get isCreatingPet(): boolean {
  return this.petService.isCreatingPet;
}
}
