// Query Refresh ID state
// https://recoiljs.org/docs/guides/asynchronous-data-queries#query-refresh

import { atomFamily } from 'recoil';
import { WEATHER_REQUEST_ID } from '../keys';
import { CityIdType } from '../atom/cityIdState';

export const weatherRequestId = atomFamily<number, CityIdType>({
  key: WEATHER_REQUEST_ID,
  default: 0,
});
