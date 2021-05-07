import { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../recoil/selectors/filteredTodoListState';
import { TodoItemContainer } from './TodoItemContainer';

export const TodoListContainer: VFC = () => {
  const todoList = useRecoilValue(filteredTodoListState);

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
