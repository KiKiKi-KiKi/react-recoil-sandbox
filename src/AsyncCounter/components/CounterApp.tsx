import { useCallback, VFC } from 'react';
import { useRecoilState } from 'recoil';
import { counterState } from '../recoil/atoms/counterState';

const Counter: VFC = () => {
  const [{ count }, setState] = useRecoilState(counterState);

  const handleAddCount = useCallback(
    (value: number) => () => {
      setState(({ count }) => {
        return {
          count: value === 0 ? 0 : count + value,
        };
      });
    },
    [setState],
  );

  return (
    <div className="counter">
      {count}
      <button type="button" onClick={handleAddCount(1)}>
        +1
      </button>
      <button type="button" onClick={handleAddCount(0)}>
        RESET
      </button>
    </div>
  );
};

export const CounterApp: VFC = () => {
  return (
    <div className="counterApp">
      Counter
      <Counter />
    </div>
  );
};
