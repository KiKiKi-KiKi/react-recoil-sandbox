import { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../recoil/atoms/todoListState';
import { TodoForm } from './TodoForm';
import { TodoItemContainer } from './TodoItemContainer';

export const TodoList: VFC = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div className="todoList">
      <TodoForm />
      <ul>
        {todoList.map(([id, item]) => {
          return (
            <li key={id}>
              <TodoItemContainer {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
