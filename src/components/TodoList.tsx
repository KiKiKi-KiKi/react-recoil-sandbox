import { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../recoil/atoms/todoListState';

export const TodoList: VFC = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div className="todoList">
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
