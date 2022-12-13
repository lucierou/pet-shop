import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPet } from '../../model/pet';
import { PetService } from '../../pet.service';



@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent {
  constructor(private petService: PetService, private router: Router, private route: ActivatedRoute) {
  }

  get petList(): IPet[] {
    return this.petService.pets;
  }

  onClickPet(id: string): void {
    this.petService.selectPet(id);
    console.log(id);
  }

  onClickNouveau(): void {
    this.router.navigate(['..','add'], {relativeTo: this.route});
  }
}
