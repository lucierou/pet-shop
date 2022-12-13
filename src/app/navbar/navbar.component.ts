import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { PetService } from '../pet/pet.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private petService: PetService, private router: Router, private authService: AuthService) {}

  // onTogglePetCreation() {
  //   this.petService.togglePetCreation();
  // }

  get isAuth(): boolean {
    return this.authService.isAuth;
  }

  onClickHome() {
    this.router.navigate(['home']);
  }

  onToggleAuth() {
    this.authService.toggleAuth();
  }

}
