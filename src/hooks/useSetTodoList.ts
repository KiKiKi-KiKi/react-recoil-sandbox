import { v4 as uuid } from 'uuid';
import { useCallback } from 'react';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';
import {
  TodoListInterface,
  todoListState,
} from '../recoil/atoms/todoListState';

interface IuseSetTodoList {
  setTodoList: SetterOrUpdater<TodoListInterface>;
  addNewTodo: (text: string) => void;
}

export const useSetTodoList = (): IuseSetTodoList => {
  const setTodoList = useSetRecoilState(todoListState);

  const addNewTodo = useCallback(
    (text: string) => {
      setTodoList((oldTodoList) => {
        const id = uuid();

        return [...oldTodoList, [id, { id, text, isComplete: false }]];
      });
    },
    [setTodoList],
  );

  return {
    setTodoList,
    addNewTodo,
  };
};
