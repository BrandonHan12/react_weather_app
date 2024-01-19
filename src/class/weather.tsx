import { getWeather, getCoordiateByCountry } from "../api";

class Weather {
  getLocationCoordinate = (city: string) => {
    return getCoordiateByCountry(city).then((response) => {
      return response;
    });
  };

  getWeatherInfo = (lat: number, lon: number) => {
    return getWeather(lat, lon).then((response) => {
      return response;
    });
  };
}

const weather = new Weather();
export default weather;
