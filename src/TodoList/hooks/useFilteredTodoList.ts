import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil';
import { filteredTodoListState } from '../recoil/selectors/filteredTodoListState';
import {
  todoListState,
  TodoListInterface,
} from '../recoil/atoms/todoListState';

interface IuseFilteredTodoList {
  filteredTodoList: TodoListInterface;
  setFilteredTodoList: SetterOrUpdater<TodoListInterface>;
}

export const useFilteredTodoList = (): IuseFilteredTodoList => {
  const filteredTodoList = useRecoilValue(filteredTodoListState);
  const setTodoList = useSetRecoilState(todoListState);

  return {
    filteredTodoList,
    setFilteredTodoList: setTodoList,
  };
};
