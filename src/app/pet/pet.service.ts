import { Injectable, OnInit } from "@angular/core";
import { IPet } from "./model/pet";

@Injectable({
    providedIn: 'root'
})
export class PetService {
    pets: IPet[] = [];
    selectedPet: IPet | undefined | null;

    constructor() {
        // console.log("Hello from PetService");
        this.createPets();
    }

    private createPets(): void {
        // const names: string[] = ['milou', 'garfield', 'nemo', 'bugs bunny'];
        // const species: Species[] = ['chien', 'chat', 'poisson', 'lapin'];
        // const prices: number[] = [500, 400, 10, 50];

        // for (let i = 0; i < 4; i++) {
        //   const pet: IPet = {
        //     id: i + 1,
        //     name: names[i],
        //     species: species[i],
        //     price: prices[i],
        //     isAvailable: i % 2 === 0,
        //   };
        //   this.pets.push(pet);
        // }

        let mypet : IPet = {id: 1, name: "milou", species: 'chien', price: 500, isAvailable: true};
        this.pets.push(mypet);
        this.pets.push({id: 2, name: "garfield", species: 'chat', price: 400, isAvailable: false});
        this.pets.push({id: 3, name: "nemo", species: 'poisson', price: 10, isAvailable: true});
        this.pets.push({id: 4, name: "bugs bunny", species: 'lapin', price: 50, isAvailable: false});
        // console.log(this.pets);
      }

      selectPet(petId: number): void {
        if (petId === this.selectedPet?.id) {
            this.selectedPet = undefined;
        }
        else {
            this.selectedPet = this.pets.find(element => element.id === petId);
            // console.log(this.selectedPet);
        }
      }
 }
