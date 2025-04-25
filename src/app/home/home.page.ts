import { Component, OnInit } from '@angular/core';
import { getDefaultTimezone } from '../utils/timezone-util';
import { GeolocationService } from '../services/geolocation.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  defaultTimeZone: string = "";
  location: any = {};
  locationData: any = {};


  ngOnInit(): void {
    this.defaultTimeZone = getDefaultTimezone();
    setInterval(()=>{this.getMyLocation();},2000);    
  }
  

  constructor(
    private geolocation: GeolocationService, 
    private http: HttpService, 
  ) {}

  async getMyLocation(){
     this.location = await this.geolocation.getCurrentLocation(); 
  }

  async getMyLocationName(){
     this.locationData = await this.http.getLocationName(this.location.lat, this.location.lng);
     return this.locationData = JSON.stringify(this.locationData);
  }

}
