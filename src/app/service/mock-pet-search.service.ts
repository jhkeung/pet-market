import { PetResponse, PetSearchResponse } from './pet';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { petSearch, blackCat, pet1, pet2, pet3, pet4 } from './mock-data';
import 'rxjs/add/observable/of';

@Injectable()
export class MockPetSearchService {

  getRandomPet(id: number, animal?: string): Observable<any> {
    let pet = {};
    switch (id) {
      case 1: {
        pet = pet1;
        break;
      }
      case 2: {
        pet = pet2;
        break;
      }
      case 3: {
        pet = pet3;
        break;
      }
      case 4: {
        pet = pet4;
        break;
      }
      default: {
        pet = blackCat;
      }
    }
    return Observable.of(pet);
  }

  getPetDetails(id: string): Observable<any> {
    return Observable.of(blackCat);
  }

  searchPets(zip: string, count: string, animal?: string): Observable<PetSearchResponse> {
    return Observable.of(petSearch);
  }
}
