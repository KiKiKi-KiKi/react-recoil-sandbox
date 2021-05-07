import { VFC } from 'react';
import { TodoForm } from './TodoForm';
import { TodoListContainer } from './TodoListContainer';
import { TodoListFilter } from './TodoListFilter';

export const TodoList: VFC = () => {
  return (
    <div className="todoList">
      <TodoListFilter />
      <TodoForm />
      <TodoListContainer />
    </div>
  );
};
