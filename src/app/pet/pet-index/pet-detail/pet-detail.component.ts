import { Component } from '@angular/core';

import { IPet } from '../../model/pet';
import { PetService } from '../../pet.service';



@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss']
})
export class PetDetailComponent {

  constructor(private petService: PetService) {
  }

  get pet(): IPet | undefined | null {
    return this.petService.selectedPet;
  }

}
