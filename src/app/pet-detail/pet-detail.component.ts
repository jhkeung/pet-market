import { Pet } from '../service/pet';
import { PetSearchService } from '../service/pet-search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {

  // sample id = '37601344'
  id: string = '37601344';
  pet: Pet;

  constructor(private petSearchService: PetSearchService) { }

  ngOnInit() {
    this.loadPetDetails();
  }

  loadPetDetails() {
    this.petSearchService.getPetDetails(this.id).subscribe((data) => {
      if (data && data.petfinder) {
        this.pet = data.petfinder.pet;
      }
    });
  }

}
