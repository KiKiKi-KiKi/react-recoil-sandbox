import { selectorFamily } from 'recoil';
import { API_KEY } from '../../config';
import { WEATHER_STATE } from '../keys';
import { Openweathermap } from '../../models/openweathermap';
import { CityIdType } from '../atom/cityIdState';
import { weatherRequestId } from '../atomFamily/weatherRequestId';

type WeatherStateStateType = Openweathermap | undefined;

export const weatherStateFamily = selectorFamily<
  WeatherStateStateType,
  CityIdType
>({
  key: WEATHER_STATE,
  get: (cityId) => async ({ get }) => {
    if (!cityId) {
      return;
    }

    // Add request ID as a dependency
    // cf. https://recoiljs.org/docs/guides/asynchronous-data-queries#query-refresh
    // requestId が変更されているとキャッシュからではなく新しい値を返すようになる
    // 値を使わなくても get していないと Refresh されない
    const requestId = get(weatherRequestId(cityId));
    console.log({ cityId, requestId });

    // units: imperial = Fahrenheit, metric = Celsius, standard(default) = Kelvin
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}&units=metric&lang=ja`,
    );
    const resJson = (await res.json()) as Openweathermap;

    return resJson;
  },
});
