import { atom } from 'recoil';
import { CITY_ID_STATE } from '../keys';

export interface CityData {
  id: string;
  name: string;
}

export const cities = [
  { id: '2128295', name: '札幌' },
  { id: '1850147', name: '東京' },
  { id: '1853908', name: '大阪' },
  { id: '1863958', name: '福岡' },
] as const;

export type CityId = typeof cities[number]['id'];

export type CityIdType = CityId | undefined;

export const cityIdState = atom<CityIdType>({
  key: CITY_ID_STATE,
  default: undefined,
});
