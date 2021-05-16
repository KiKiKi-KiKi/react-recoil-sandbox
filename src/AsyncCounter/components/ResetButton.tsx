import { VFC } from 'react';
import { useResetRecoilState } from 'recoil';
import { counterState } from '../recoil/atoms/counterState';

// cf. https://recoiljs.org/docs/api-reference/core/useResetRecoilState/
export const ResetButton: VFC = () => {
  const handleReset = useResetRecoilState(counterState);

  return (
    <div>
      <p>Return Default Value</p>
      <button type="button" onClick={handleReset}>
        RESET STATE
      </button>
    </div>
  );
};
