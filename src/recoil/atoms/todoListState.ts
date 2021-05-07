import { atom } from 'recoil';
import { TODOLISTSTATE } from '../keys';

type TodoId = string;

interface TodoItem {
  id: string;
  text: string;
  isComplete: boolean;
}

type TodoListInterface = [TodoId, TodoItem][];

const DUMMYDATA: TodoListInterface = [
  ['1', { id: '1', text: 'todo_1', isComplete: false }],
  ['2', { id: '2', text: 'todo_2', isComplete: false }],
  ['3', { id: '3', text: 'todo_3', isComplete: false }],
];

export const todoListState = atom<TodoListInterface>({
  key: TODOLISTSTATE,
  default: DUMMYDATA,
});
