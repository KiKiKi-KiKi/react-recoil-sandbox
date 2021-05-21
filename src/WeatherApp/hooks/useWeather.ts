import { useRecoilValue } from 'recoil';
import { Openweathermap } from '../models/openweathermap';
import { cityIdState } from '../recoil/atom/cityIdState';
import { weatherStateFamily } from '../recoil/selector/weatherStateFamily';

interface IuseWeather {
  weather: Openweathermap | undefined;
}

export const useWeather = (): IuseWeather => {
  const cityId = useRecoilValue(cityIdState);
  const weather = useRecoilValue(weatherStateFamily(cityId));

  const errorMessage = weather?.message;
  console.log({ weather });

  if (errorMessage) {
    throw new Error(errorMessage);
  }

  return {
    weather,
  };
};
