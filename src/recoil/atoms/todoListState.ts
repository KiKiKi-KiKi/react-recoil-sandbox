import { atom } from 'recoil';
import { TODOLISTSTATE } from '../keys';

export type TodoIdType = string;

export interface TodoItemInterface {
  id: string;
  text: string;
  isComplete: boolean;
}

export type TodoListInterface = [TodoIdType, TodoItemInterface][];

export const todoListState = atom<TodoListInterface>({
  key: TODOLISTSTATE,
  default: [],
});
