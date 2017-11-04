import { Pet } from '../service/pet';
import { PetSearchService } from '../service/pet-search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  featuredPets: Pet[] = [];

  constructor(private petSearchService: PetSearchService) { }

  ngOnInit() {
    this.loadRandomPet('cat');
    this.loadRandomPet('dog');
    this.loadRandomPet();
  }

  loadRandomPet(animal?: string) {
    this.petSearchService.getRandomPet(animal).subscribe((data) => {
      if (data && data.petfinder) {
        this.featuredPets.push(data.petfinder.pet);
      }
    }, (error) => {
      console.error(error);
    });
  }
}
