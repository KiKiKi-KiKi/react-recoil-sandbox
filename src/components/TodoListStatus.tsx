import { VFC } from 'react';
import { useTodoListState } from '../hooks/useTodoListState';

export const TodoListStatus: VFC = () => {
  const {
    total,
    completeNum,
    unCompleteNum,
    percentCompleted,
  } = useTodoListState();

  const formattedPercentCompleted =
    percentCompleted && percentCompleted.toFixed(2);

  return (
    <div>
      <ul>
        <li>Total item: {total}</li>
        <li>Items completed: {completeNum}</li>
        <li>Items not completed: {unCompleteNum}</li>
        <li>Percent completed: {formattedPercentCompleted}%</li>
      </ul>
    </div>
  );
};
