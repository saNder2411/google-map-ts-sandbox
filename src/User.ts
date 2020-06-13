import { Mappable } from './CustomMap';
import faker from 'faker';

export class User implements Mappable {
  name: string;
  color: string = `tomato`;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  getMarkerContent = (): string => (`
    <div style="color: ${this.color};">
      <h4>User Name: ${this.name}</h4>
    </div>
  `);
}