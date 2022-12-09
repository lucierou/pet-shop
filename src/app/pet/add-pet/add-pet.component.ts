import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Species } from '../model/pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent {
species: Species[] = ['chien', 'chat', 'poisson', 'lapin'];

  constructor(private fb: FormBuilder, private petService: PetService) {}

  addPetForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    species: ['chien', Validators.required],
    price: ['', [Validators.required, Validators.min(0)]],
    isAvailable: ['true', Validators.required],
    imageUrl: '',
  });

  onSubmit() {
    console.log(this.addPetForm.value);
    console.log(this.addPetForm.valid);
    if (this.addPetForm.valid) {
      this.petService.createPet(this.addPetForm.value.name,
                                this.addPetForm.value.species,
                                this.addPetForm.value.price,
                                this.addPetForm.value.isAvailable,
                                this.addPetForm.value.imageUrl);

      this.petService.togglePetCreation();
    }

  };

}
