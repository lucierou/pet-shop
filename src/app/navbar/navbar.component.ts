import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../pet/pet.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private petService: PetService, private router: Router) {}

  // onTogglePetCreation() {
  //   this.petService.togglePetCreation();
  // }

  onClickHome() {
    this.router.navigate(['home']);
  }
}
