import { useCallback, VFC } from 'react';
import {
  TodoIdType,
  TodoItemInterface,
  todoListState,
} from '../recoil/atoms/todoListState';
import { useSetRecoilState } from 'recoil';
import { replaceItem, removeItem } from '../utils';
import { TodoItemBody } from './TodoItemBody';

type TodoItemProps = {
  onEditMode: () => void;
} & TodoItemInterface;

export const TodoItem: VFC<TodoItemProps> = ({
  id,
  text,
  isComplete,
  onEditMode,
}) => {
  const setTodoList = useSetRecoilState(todoListState);

  const toggleCompletion = useCallback(
    (id: TodoIdType, isComplete: boolean) => {
      setTodoList((oldTodoList) =>
        replaceItem(oldTodoList)([
          id,
          {
            isComplete: !isComplete,
          },
        ]),
      );
    },
    [setTodoList],
  );

  const deleteItem = useCallback(
    (deleteId: TodoIdType) => {
      setTodoList((oldTodoList) => removeItem(oldTodoList)(deleteId));
    },
    [setTodoList],
  );

  const onToggleCompletionHandler = useCallback(() => {
    toggleCompletion(id, isComplete);
  }, [id, isComplete, toggleCompletion]);

  const onDeleteItemHandler = () => {
    if (!window.confirm(`Really delete ${text}?`)) {
      return;
    }
    deleteItem(id);
  };

  return (
    <div id={id}>
      <input
        type="checkbox"
        checked={isComplete}
        onChange={onToggleCompletionHandler}
      />
      <TodoItemBody text={text} isComplete={isComplete}>
        <span onClick={onEditMode}>{text}</span>
        <button type="button" onClick={onEditMode}>
          Edit
        </button>
      </TodoItemBody>
      <button type="button" onClick={onDeleteItemHandler}>
        X
      </button>
    </div>
  );
};
