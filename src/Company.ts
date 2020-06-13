import { Mappable } from './CustomMap';
import faker from 'faker';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  color: string = `tomato`;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  getMarkerContent = (): string => (`
    <div style="color: ${this.color};">
      <h3>Company Name: ${this.companyName}</h3>
      <h4>Catchphrase: ${this.catchPhrase}</h4>
    </div>
  `);
}