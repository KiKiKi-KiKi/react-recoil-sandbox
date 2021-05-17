import { DefaultValue, selector } from 'recoil';
import { LAZY_COUNTER_STATE } from '../keys';
import { counterState, CounterInterface } from '../atoms/counterState';

// selector の type を指定しないと set の newValue が unknown になる
export const lazyCounterState = selector<CounterInterface>({
  key: LAZY_COUNTER_STATE,
  get: async ({ get }): Promise<CounterInterface> => {
    const count = get(counterState);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return count;
  },
  set: ({ set }, newValue) => {
    // Uncaught Error: Recoil: Async selector sets are not currently supported.
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    // When call Reset
    console.log(newValue, newValue.constructor?.name);
    if (newValue instanceof DefaultValue) {
      console.log('DefaultValue', DefaultValue);

      return DefaultValue;
    }

    set(counterState, ({ count }) => ({
      count: count + newValue.count,
    }));
  },
});
