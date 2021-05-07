import { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../recoil/atoms/todoListState';
import { TodoItemContainer } from './TodoItemContainer';

export const TodoListContainer: VFC = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <ul>
      {todoList.map(([id, item]) => {
        return (
          <li key={id}>
            <TodoItemContainer {...item} />
          </li>
        );
      })}
    </ul>
  );
};
