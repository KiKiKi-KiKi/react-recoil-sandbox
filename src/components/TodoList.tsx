import { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../recoil/atoms/todoListState';
import { TodoForm } from './TodoForm';

export const TodoList: VFC = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div className="todoList">
      <TodoForm />
      <ul>
        {todoList.map(([id, item]) => {
          return (
            <li key={id}>
              <span>{item.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
