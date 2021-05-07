import { useCallback, useState, VFC } from 'react';
import { useSetRecoilState } from 'recoil';
import { replaceItem } from '../utils';
import {
  todoListState,
  TodoItemInterface,
} from '../recoil/atoms/todoListState';

type TodoItemEditFormProps = {
  onEditModeEnd: () => void;
} & Pick<TodoItemInterface, 'id' | 'text'>;

export const TodoItemEditForm: VFC<TodoItemEditFormProps> = ({
  id,
  text: initialText,
  onEditModeEnd,
}) => {
  const setTodoList = useSetRecoilState(todoListState);
  const [text, setText] = useState<string>(initialText);

  const onChangeHandler = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      setText(evt.currentTarget.value);
    },
    [],
  );

  const updateTodoItem = useCallback(
    (text: string) => {
      setTodoList((oldTodoList) =>
        replaceItem(oldTodoList)([
          id,
          {
            text,
          },
        ]),
      );
    },
    [id, setTodoList],
  );

  const onSubmitHandler = useCallback(
    (evt: React.FormEvent) => {
      evt.preventDefault();
      const value = text.trim();
      if (!value) {
        return false;
      }

      updateTodoItem(text);
      onEditModeEnd();
    },
    [text, onEditModeEnd, updateTodoItem],
  );

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        value={text}
        onChange={onChangeHandler}
        autoFocus={true}
      />
      <button type="submit">UPDATE</button>
      <button type="button" onClick={onEditModeEnd}>
        CANCEL
      </button>
    </form>
  );
};
