import { selector } from 'recoil';
import { FILTEREDTODOLISTSELECTOR } from '../keys';
import {
  todoListFilterState,
  showAll,
  showComplete,
  showUncomplete,
} from '../atoms/todoListFilterState';
import { todoListState } from '../atoms/todoListState';

export const filteredTodoListState = selector({
  key: FILTEREDTODOLISTSELECTOR,
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case showAll: {
        return list;
      }
      case showComplete: {
        return list.filter(([_, item]) => item.isComplete);
      }
      case showUncomplete: {
        return list.filter(([_, item]) => !item.isComplete);
      }
      default: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _: never = filter;

        return list;
      }
    }
  },
});
