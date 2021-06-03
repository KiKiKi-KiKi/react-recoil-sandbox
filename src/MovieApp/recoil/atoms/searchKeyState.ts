import { atom } from 'recoil';
import { SEARCH_KEY } from '../keys';

export const searchKeyState = atom({
  key: SEARCH_KEY,
  default: '',
});
