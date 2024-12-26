import axios from "axios";

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
  status: string;
  data: ForecastModel | {};
}

export async function getWeatherForecast(
  lat: number,
  lng: number
): Promise<any> {
  let response: any = {};
  try {
    const res = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset`
    );
    response = {
      status: "ok",
      data: res.data,
    };
  } catch (error: any) {
    response = {
      status: "nok",
      data: { error: error.message || "An error occurred" },
    };
  }
  return { result: response };
}
