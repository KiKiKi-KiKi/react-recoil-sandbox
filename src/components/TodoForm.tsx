import { v4 as uuid } from 'uuid';
import { useCallback, useState, VFC } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../recoil/atoms/todoListState';

export const TodoForm: VFC = () => {
  const setTodoList = useSetRecoilState(todoListState);
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

    setTodoList((oldTodoList) => {
      const id = uuid();

      return [
        ...oldTodoList,
        [
          id,
          {
            id,
            text: todoText,
            isComplete: false,
          },
        ],
      ];
    });

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
