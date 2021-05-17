import { Suspense, useCallback, VFC } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { lazyCounterState } from '../recoil/selectors/lazyCounterState';

const LazyDoubleButton: VFC = () => {
  const setCount = useSetRecoilState(lazyCounterState);

  const handleClick = useCallback(() => {
    setCount({ count: 2 });
  }, [setCount]);

  return (
    <button type="button" onClick={handleClick}>
      +2
    </button>
  );
};

const LazyCount: VFC = () => {
  const { count } = useRecoilValue(lazyCounterState);

  return <p>{count}</p>;
};

export const LazyCounter: VFC = () => {
  return (
    <div>
      Lazy Count:
      <Suspense fallback={<p>loading...</p>}>
        <LazyCount />
      </Suspense>
      <LazyDoubleButton />
    </div>
  );
};
