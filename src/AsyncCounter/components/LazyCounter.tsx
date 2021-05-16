import { Suspense, VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { lazyCounterState } from '../recoil/selectors/lazyCounterState';

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
    </div>
  );
};
