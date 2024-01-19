import axios from "axios";
import { apiKey, url } from "./constant";

export interface Coordinate {
  country: string;
  lat: number;
  lon: number;
  name: string;
  state: string;
}

export const getCoordiateByCountry = (city: string) => {
  return axios.get<Coordinate[]>(
    `${url}/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
  );
};
