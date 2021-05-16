import { selector } from 'recoil';
import { TODOLISTSTATUSSTATE } from '../keys';
import { todoListState } from '../atoms/todoListState';

export const todoListStatusState = selector({
  key: TODOLISTSTATUSSTATE,
  get: ({ get }) => {
    const todoList = get(todoListState);
    const total = todoList.length;
    const completeNum = todoList.filter(([_, item]) => item.isComplete).length;
    const unCompleteNum = total - completeNum;
    const percentCompleted = total === 0 ? 0 : (completeNum / total) * 100;

    return {
      total,
      completeNum,
      unCompleteNum,
      percentCompleted,
    };
  },
});
