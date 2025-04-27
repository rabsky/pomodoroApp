import { Injectable } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  async getCurrentLocation(): Promise<{}> {
     let coordinates: any = {};
     const position: Position = await Geolocation.getCurrentPosition();
     const latitude: number = position.coords.latitude;
     const logitude: number = position.coords.longitude;

     return coordinates = {lat:latitude, lng:logitude};
  }
}
