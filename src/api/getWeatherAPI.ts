import axios from "axios";
import { apiKey, url } from "./constant";

export interface WeatherInfo {
  base: string;
  cloud: { all: number };
  main: {
    feels_like: number;
    humidity: number;
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  sys: { country: string };
  weather: {
    description: string;
    main: string;
  }[];
  name: string;
}

export const getWeather = (lat: number, lon: number) => {
  return axios.get<WeatherInfo>(
    `${url}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
  );
};
