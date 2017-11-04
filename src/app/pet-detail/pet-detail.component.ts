import { MockPetSearchService } from '../service/mock-pet-search.service';
import { Pet } from '../service/pet';
import { PetSearchService } from '../service/pet-search.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {

  // sample id = '37601344' for black cat
  id: string;
  pet: Pet;

  constructor(private petSearchService: PetSearchService,
    private mockService: MockPetSearchService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.loadPetDetails();
    });
  }

  loadPetDetails() {
    this.petSearchService.getPetDetails(this.id).subscribe((data) => {
      if (data && data.petfinder) {
        this.pet = data.petfinder.pet;
      }
    });
  }

}
