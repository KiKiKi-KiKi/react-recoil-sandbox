import { SetterOrUpdater, useRecoilState } from 'recoil';
import {
  todoListState,
  TodoListInterface,
} from '../recoil/atoms/todoListState';

interface IuseTodoList {
  todoList: TodoListInterface;
  setTodoList: SetterOrUpdater<TodoListInterface>;
}

export const useTodoList = (): IuseTodoList => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  return {
    todoList,
    setTodoList,
  };
};
