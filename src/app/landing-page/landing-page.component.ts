import { Pet } from '../service/pet';
import { PetSearchService } from '../service/pet-search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  featuredPet: Pet;

  constructor(private petSearchService: PetSearchService) { }

  ngOnInit() {
    this.petSearchService.getRandomPet().subscribe((data) => {
      if (data && data.petfinder) {
        this.featuredPet = data.petfinder.pet;
      }
    }, (error) => {
      console.error(error);
    });
  }

}
