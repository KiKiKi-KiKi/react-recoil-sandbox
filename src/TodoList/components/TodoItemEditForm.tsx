import { useCallback, useState, VFC } from 'react';
import { TodoItemInterface } from '../recoil/atoms/todoListState';
import { useUpdateTodo } from '../hooks/useSetTodoList';

type TodoItemEditFormProps = {
  onEditModeEnd: () => void;
} & Pick<TodoItemInterface, 'id' | 'text'>;

export const TodoItemEditForm: VFC<TodoItemEditFormProps> = ({
  id,
  text: initialText,
  onEditModeEnd,
}) => {
  const { updateItem } = useUpdateTodo();
  const [text, setText] = useState<string>(initialText);

  const onChangeHandler = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      setText(evt.currentTarget.value);
    },
    [],
  );

  const onSubmitHandler = useCallback(
    (evt: React.FormEvent) => {
      evt.preventDefault();
      const value = text.trim();
      if (!value) {
        return false;
      }

      updateItem(id, text);
      onEditModeEnd();
    },
    [id, text, updateItem, onEditModeEnd],
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
