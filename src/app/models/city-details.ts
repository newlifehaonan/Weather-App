export class CityDetails {

    city_name: string;
    country_code: string;
    lat: string;
    lon: string;
    state_code: string;
    timezone: string;
    constructor(city_name, country_code, lat, lon, state_code, timezone) {
        this.city_name = city_name;
        this.country_code = country_code;
        this.lat =lat;
        this.lon =lon;
        this.state_code = state_code;
        this.timezone = timezone;
    }
}
