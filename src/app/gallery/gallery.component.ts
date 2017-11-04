import { Pet } from '../service/pet';
import { PetSearchService } from '../service/pet-search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  count = '25';
  zip = '27514';
  pets: Pet[];

  constructor(private petSearchService: PetSearchService) { }

  ngOnInit() {
    this.searchPets();
  }

  searchPets() {
    this.petSearchService.searchPets(this.zip, this.count, 'cat').subscribe((data) => {
      if (data && data.petfinder && data.petfinder.pets && data.petfinder.pets.pet) {
        this.pets = data.petfinder.pets.pet;
      }
    });
  }
}
