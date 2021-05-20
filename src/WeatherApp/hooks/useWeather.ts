import { useRecoilValue } from 'recoil';
import { weatherState } from '../recoil/selector/weatherState';

export const useWeather = () => {
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
