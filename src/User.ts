import faker from 'faker';

export class User {
  name: string;
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
    <div>
      <h4>User Name: ${this.name}</h4>
    </div>
  `);
}