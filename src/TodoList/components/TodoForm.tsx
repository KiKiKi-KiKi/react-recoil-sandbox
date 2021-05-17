import { v4 as uuid } from 'uuid';
import { useCallback, useState, VFC } from 'react';
import { useSetTodoList } from '../hooks/useSetTodoList';

export const TodoForm: VFC = () => {
  const { addNewTodo } = useSetTodoList();
  const [text, setText] = useState<string>('');

  const onChangeTextHandler = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      setText(evt.currentTarget.value);
    },
    [],
  );

  const onSubmitHandler = (evt: React.FormEvent) => {
    evt.preventDefault();
    const todoText = text.trim();

    if (!todoText) {
      return false;
    }

    addNewTodo(todoText);
    setText('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        value={text}
        onChange={onChangeTextHandler}
        placeholder="Todo"
        autoFocus={true}
      />
      <button type="submit">ADD</button>
    </form>
  );
};
