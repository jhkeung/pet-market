export class PetResponse {
  petfinder: PetFinder;
}

export class PetFinder {
  pet: Pet;
}

export class PetSearchResponse {
  petfinder: SearchPetFinder;
}

export class SearchPetFinder {
  pets: any;
}

export class Pets {
  pet: Pet[];
}

export class Pet {
  options: DataWrapper[];
  status: DataWrapper;
  contact: Contact;
  age: DataWrapper;
  size: DataWrapper;
  media: Media;
  id: DataWrapper;
  shelterPetId: DataWrapper;
  breeds: Breeds;
  name: DataWrapper;
  sex: DataWrapper;
  description: DataWrapper;
  mix: DataWrapper;
  shelterId: DataWrapper;
  lastUpdate: DataWrapper;
  animal: DataWrapper;
}

export class Contact {
  phone: DataWrapper;
  state: DataWrapper;
  address2: DataWrapper;
  email: DataWrapper;
  city: DataWrapper;
  zip: DataWrapper;
  fax: DataWrapper;
}

export class Media {
  photos: Photos;
}

export class DataWrapper {
  $t: string;
}

export class Breeds {
  breed: DataWrapper;
}

export class Photos {
  photo: Photo[];
}

export class Photo {
  '@size': string;
  $t: string;
  '@id': string;
}
