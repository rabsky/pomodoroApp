import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core'; 

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  MAP_ACCESS_TOKEN = '';

  constructor() { }

  async getLocationName(lat:number, lng:number): Promise<Object> {
      let responseData = await CapacitorHttp.get({url:`https://us1.locationiq.com/v1/reverse?key=&{this.MAP_ACESS_TOKEN}&lat=48.8584&lon=2.2945&format=json`});
      return responseData;   
  }

}
