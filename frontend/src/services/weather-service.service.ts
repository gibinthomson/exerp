import * as backendApi from "../shared/backend-api";

export interface ForecastModel {
  latitude: number;
  longitude: number;
  daily_units: {
    temperature_2m_max: string;
    temperature_2m_min: string;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
}
export interface Response {
  result: { status: string; data: ForecastModel | {} };
}
export default class WeatherService {
  constructor() {}

  getWeatherForecast(lat: number, lng: number): Promise<Response> {
    return backendApi.get("weather/forecast", { lat, lng });
  }
}
