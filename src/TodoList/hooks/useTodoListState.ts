import { useRecoilValue } from 'recoil';
import { todoListStatusState } from '../recoil/selectors/todoListStatusState';

interface IuseTodoListState {
  total: number;
  completeNum: number;
  unCompleteNum: number;
  percentCompleted: number;
}

export const useTodoListState = (): IuseTodoListState => {
  const {
    total,
    completeNum,
    unCompleteNum,
    percentCompleted,
  } = useRecoilValue(todoListStatusState);

  return {
    total,
    completeNum,
    unCompleteNum,
    percentCompleted,
  };
};
