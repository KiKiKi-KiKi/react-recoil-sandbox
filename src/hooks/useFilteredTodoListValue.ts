import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../recoil/selectors/filteredTodoListState';
import { TodoListInterface } from '../recoil/atoms/todoListState';

export const useFilteredTodoListValue = (): TodoListInterface => {
  const filteredTodoList = useRecoilValue(filteredTodoListState);

  return filteredTodoList;
};
