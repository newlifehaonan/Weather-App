export class WeatherForecast {
    max_temp: number;
    min_temp: number;
    clouds: number;
    // wind_cdir: string;
    datetime: string

    constructor(max_temp, min_temp, clouds, datetime) {
        this.max_temp = max_temp;
        this.min_temp = min_temp;
        this.clouds = clouds;
        // this.wind_cdir = wind_cdir;
        this.datetime = datetime;
    }
}
