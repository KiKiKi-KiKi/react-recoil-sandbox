import { useCallback, VFC } from 'react';
import {
  TodoIdType,
  TodoItemInterface,
  TodoListInterface,
  todoListState,
} from '../recoil/atoms/todoListState';
import { useSetRecoilState } from 'recoil';

type ReplaceItemProps = [TodoIdType, Partial<TodoItemInterface>];

const replaceItem = (list: TodoListInterface) => ([
  id,
  item,
]: ReplaceItemProps): TodoListInterface => {
  const todoListMap = new Map(list);
  const currentItem = todoListMap.get(id);
  if (!currentItem) {
    return list;
  }

  todoListMap.set(id, {
    ...currentItem,
    ...item,
  });

  return [...todoListMap.entries()];
};

const removeItem = (list: TodoListInterface) => (
  id: TodoIdType,
): TodoListInterface => {
  const deleteIndex = list.findIndex(([itemId]) => itemId === id);

  return [...list.slice(0, deleteIndex), ...list.slice(deleteIndex + 1)];
};

export const TodoItem: VFC<TodoItemInterface> = ({ id, text, isComplete }) => {
  const setTodoList = useSetRecoilState(todoListState);

  const toggleCompletion = useCallback(
    (isComplete: boolean) => {
      setTodoList((oldTodoList) =>
        replaceItem(oldTodoList)([
          id,
          {
            isComplete: !isComplete,
          },
        ]),
      );
    },
    [id, setTodoList],
  );

  const deleteItem = useCallback(
    (deleteId: TodoIdType) => {
      setTodoList((oldTodoList) => removeItem(oldTodoList)(deleteId));
    },
    [setTodoList],
  );

  const onToggleCompletionHandler = useCallback(() => {
    toggleCompletion(isComplete);
  }, [isComplete, toggleCompletion]);

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
      {isComplete ? <del>{text}</del> : <span>{text}</span>}
      <button type="button" onClick={onDeleteItemHandler}>
        X
      </button>
    </div>
  );
};
