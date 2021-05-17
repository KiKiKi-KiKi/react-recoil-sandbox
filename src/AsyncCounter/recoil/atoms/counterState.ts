import { atom } from 'recoil';
import { COUNTER_STATE } from '../keys';

export interface CounterInterface {
  count: number;
}

export const counterState = atom<CounterInterface>({
  key: COUNTER_STATE,
  default: {
    count: 0,
  },
});
