import { VFC } from 'react';
import { useFilteredTodoListValue } from '../hooks/useFilteredTodoListValue';
import { TodoItemContainer } from './TodoItemContainer';

export const TodoListContainer: VFC = () => {
  const filteredTodoList = useFilteredTodoListValue();

  return (
    <ul>
      {filteredTodoList.map(([id, item]) => {
        return (
          <li key={id}>
            <TodoItemContainer {...item} />
          </li>
        );
      })}
    </ul>
  );
};
