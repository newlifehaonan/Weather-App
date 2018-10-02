import { Component, OnInit, Input} from '@angular/core';
import { weatherBit } from '../../environments/environment';
import { WeatherForecast} from '../models/weather-forecast';
import { CityDetails} from '../models/city-details';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.css']
})

export class WeatherForecastListComponent implements OnInit {

  @Input() searchText: string;
  weatherBitUrl: string;
  weatherForecasts: WeatherForecast[];
  cityDetails: CityDetails;

  constructor(private http: HttpClient) {
    //this is for test purpose
    // this.searchText = "Raleigh";

    this.weatherForecasts = [];
    this.weatherBitUrl = ``;
    this.cityDetails = {
      city_name: '',
      country_code: '',
      lat: '',
      lon: '',
      state_code:'',
      timezone:''
    }
  }

  getWeather() {
    this.weatherBitUrl = `${weatherBit.urlBase}?city=${this.searchText}&key=${weatherBit.apiKey}`;
    this.http.get(this.weatherBitUrl).subscribe((result: any) => {
      this.cityDetails.city_name = result['city_name'];
      this.cityDetails.country_code = result['country_code'];
      this.cityDetails.lat = result['lat'];
      this.cityDetails.lon = result['lon'];
      this.cityDetails.state_code = result['state_code'];
      this.cityDetails.timezone = result['timezone'];
      result['data'].forEach(element => {
        this.weatherForecasts.push(
          {
            max_temp: element.max_temp,
            min_temp: element.min_temp,
            clouds: element.clouds,
            datetime: element.datetime
          }
        )
      });
      console.log(this.cityDetails);
      console.log(this.weatherForecasts);
    })
  }

  ngOnInit() {

  }

}
