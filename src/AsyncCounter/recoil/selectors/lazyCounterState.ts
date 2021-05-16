import { selector } from 'recoil';
import { LAZY_COUNTER_STATE } from '../keys';
import { counterState } from '../atoms/counterState';

export const lazyCounterState = selector({
  key: LAZY_COUNTER_STATE,
  get: async ({ get }) => {
    const count = get(counterState);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return count;
  },
});
