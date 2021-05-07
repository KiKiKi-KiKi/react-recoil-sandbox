import { VFC } from 'react';
import { TodoForm } from './TodoForm';
import { TodoListContainer } from './TodoListContainer';
import { TodoListFilter } from './TodoListFilter';
import { TodoListStatus } from './TodoListStatus';

export const TodoList: VFC = () => {
  return (
    <div className="todoList">
      <TodoListFilter />
      <TodoForm />
      <TodoListContainer />
      <hr />
      <TodoListStatus />
    </div>
  );
};
