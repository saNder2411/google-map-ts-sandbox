export const mapOptions = {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
};

type mapOptionsType = typeof mapOptions;

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  color: string;
  getMarkerContent(): string;
}

export class CustomMap {
  protected googleMapOpts: mapOptionsType;
  private googleMap: google.maps.Map;

  constructor(divId: string, googleMapOpts: mapOptionsType) {
    this.googleMapOpts = googleMapOpts;
    this.googleMap = new google.maps.Map(document.getElementById(divId), this.googleMapOpts)
  }

  addMarker({location: {lat, lng},  getMarkerContent}: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat,
        lng,
      }
    });

    marker.addListener(`click`, () => {
      const infoWindow = new google.maps.InfoWindow({
        content: getMarkerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}