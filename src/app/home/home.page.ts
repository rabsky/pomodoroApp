import { Component, OnInit } from '@angular/core';
import { getDefaultTimezone } from '../utils/timezone-util';
import { GeolocationService } from '../services/geolocation.service';
import { HttpService } from '../services/http.service';
import { HttpResponse } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  defaultTimeZone: string = "";
  location: any = {};
  locationData: any;


  ngOnInit(): void {
    this.defaultTimeZone = getDefaultTimezone();

    this.getMyLocationName(this.location.lat, this.location.lng);
  }


  constructor(
    private geolocation: GeolocationService,
    private http: HttpService,
  ) {
    setInterval(()=>{this.getMyLocation();},500);
  }


  async getMyLocation(){
     this.location = await this.geolocation.getCurrentLocation();
  }

  getMyLocationName(latitude: number, longitude: number){
     this.locationData = this.http.getLocationName(latitude, longitude);
     console.log(this.locationData);
     return this.locationData = JSON.stringify(this.locationData);
  }

}
