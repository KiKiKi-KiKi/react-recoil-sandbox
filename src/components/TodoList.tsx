import { VFC } from 'react';
import { TodoForm } from './TodoForm';
import { TodoListContainer } from './TodoListContainer';

export const TodoList: VFC = () => {
  return (
    <div className="todoList">
      <TodoForm />
      <TodoListContainer />
    </div>
  );
};
