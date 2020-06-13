export const mapOptns = {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
};

type MapOptnsType = typeof mapOptns;

interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  protected googleMapOpts: MapOptnsType;
  private googleMap: google.maps.Map;

  constructor(divId: string, googleMapOpts: MapOptnsType) {
    this.googleMapOpts = googleMapOpts;
    this.googleMap = new google.maps.Map(document.getElementById(divId), this.googleMapOpts)
  }

  addMarker({location: {lat, lng}}: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat,
        lng,
      }
    });
  }
}