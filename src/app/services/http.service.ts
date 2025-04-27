import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse, HttpOptions } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  MAP_ACCESS_TOKEN = 'pk.49d15f7371e82f7f19e89e2ca39a5a9e';

  constructor() { }

  async getLocationName(lat:number, lng:number): Promise<HttpResponse> {
      const options: HttpOptions = {
        url: 'https://us1.locationiq.com/v1/reverse',
        data: {
          key: this.MAP_ACCESS_TOKEN,
          lat: lat,
          lon: lng,
          format: 'json',
        },
      }
      const responseData:HttpResponse = await CapacitorHttp.get(options);
      return responseData;
  }

}
