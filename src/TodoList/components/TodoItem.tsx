import { useCallback, VFC } from 'react';
import { TodoItemInterface } from '../recoil/atoms/todoListState';
import { useUpdateTodo } from '../hooks/useSetTodoList';
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
  const { toggleCompletion, deleteItem } = useUpdateTodo();

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
