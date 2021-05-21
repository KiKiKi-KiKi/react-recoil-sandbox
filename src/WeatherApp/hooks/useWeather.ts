import { useRecoilValue } from 'recoil';
import { weatherState } from '../recoil/selector/weatherState';
import { Openweathermap } from '../models/openweathermap';

interface IuseWeather {
  weather: Openweathermap | undefined;
}

export const useWeather = (): IuseWeather => {
  const weather = useRecoilValue(weatherState);
  const errorMessage = weather?.message;
  console.log({ weather });

  if (errorMessage) {
    throw new Error(errorMessage);
  }

  return {
    weather,
  };
};
