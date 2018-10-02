import { Component, OnInit, Input} from '@angular/core';
import { CityDetails } from '../models/city-details';
import { WeatherForecast } from '../models/weather-forecast';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
})
export class WeatherForecastComponent implements OnInit {

  @Input() city_detail: CityDetails;
  @Input() weather_forecast: WeatherForecast[];
  @Input() chart;

  constructor() {

  }

  ngOnInit() {
    
  }


}
