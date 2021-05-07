import { atom } from 'recoil';
import { TODOLISTSTATE } from '../keys';

export type TodoId = string;

export interface TodoItem {
  id: string;
  text: string;
  isComplete: boolean;
}

type TodoListInterface = [TodoId, TodoItem][];

export const todoListState = atom<TodoListInterface>({
  key: TODOLISTSTATE,
  default: [],
});
