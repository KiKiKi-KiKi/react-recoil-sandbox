import { selector } from 'recoil';
import { API_KEY } from '../../config';
import { WEATHER_STATE } from '../keys';
import { cityIdState } from '../atom/cityIdState';
import { Openweathermap } from '../../models/openweathermap';

export const weatherState = selector<Openweathermap | undefined>({
  key: WEATHER_STATE,
  get: async ({ get }) => {
    const cityId = get(cityIdState);
    if (!cityId) {
      return;
    }
    // units: imperial = Fahrenheit, metric = Celsius, standard(default) = Kelvin
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}&units=metric&lang=ja`,
    );
    const resJson = (await res.json()) as Openweathermap;

    return resJson;
  },
});
