import { v4 as uuid } from 'uuid';
import { useCallback } from 'react';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';
import { TodoIdType } from '../recoil/atoms/todoListState';
import { replaceItem, removeItem } from '../utils';
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

interface IuseUpdateTodo {
  toggleCompletion: (id: TodoIdType, isComplete: boolean) => void;
  updateItem: (id: TodoIdType, text: string) => void;
  deleteItem: (id: TodoIdType) => void;
}

export const useUpdateTodo = (): IuseUpdateTodo => {
  const setTodoList = useSetRecoilState(todoListState);

  const toggleCompletion = useCallback(
    (id: TodoIdType, isComplete: boolean) => {
      setTodoList((oldTodoList) =>
        replaceItem(oldTodoList)([id, { isComplete: !isComplete }]),
      );
    },
    [setTodoList],
  );

  const updateItem = useCallback(
    (id: TodoIdType, text: string) => {
      setTodoList((oldTodoList) => replaceItem(oldTodoList)([id, { text }]));
    },
    [setTodoList],
  );

  const deleteItem = useCallback(
    (id: TodoIdType) => {
      setTodoList((oldTodoList) => removeItem(oldTodoList)(id));
    },
    [setTodoList],
  );

  return {
    toggleCompletion,
    updateItem,
    deleteItem,
  };
};
