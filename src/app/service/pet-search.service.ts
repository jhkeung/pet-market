import { environment } from '../../environments/environment';
import { PetResponse } from './pet';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PetSearchService {

  private API_KEY = 'beb4d8df90776067a66215b74e5cb5d9';
  private FORMAT = 'json';
  private BASE_URL = environment.basePetFinderApiPath;

  constructor(private http: Http) {
  }

  getRandomPet(): Observable<PetResponse> {
    const url = `${this.BASE_URL}/pet.getRandom`;

    const params: URLSearchParams = new URLSearchParams();
    params.set('key', this.API_KEY);
    params.set('format', this.FORMAT);
    params.set('output', 'basic');

    return this.http.get(url, { search: params }).map(response => response.json());
  }
}
