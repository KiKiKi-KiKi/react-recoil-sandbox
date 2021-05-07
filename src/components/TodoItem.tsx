import { useCallback, VFC } from 'react';
import {
  TodoItem as TodoItemProps,
  todoListState,
} from '../recoil/atoms/todoListState';
import { useSetRecoilState } from 'recoil';
import { TodoId } from '../recoil/atoms/todoListState';

export const TodoItem: VFC<TodoItemProps> = ({ id, text, isComplete }) => {
  const setTodoList = useSetRecoilState(todoListState);

  const toggleItemCompletion = useCallback(() => {
    setTodoList((oldTodoList) => {
      const todoListMap = new Map(oldTodoList);
      const item = todoListMap.get(id);
      if (!item) {
        return oldTodoList;
      }

      todoListMap.set(id, {
        ...item,
        isComplete: !item.isComplete,
      });

      return [...todoListMap.entries()];
    });
  }, [id, setTodoList]);

  const deleteItem = useCallback(
    (deleteId: TodoId) => {
      setTodoList((oldTodoList) => {
        const deleteIndex = oldTodoList.findIndex(([id]) => id === deleteId);

        return [
          ...oldTodoList.slice(0, deleteIndex),
          ...oldTodoList.slice(deleteIndex + 1),
        ];
      });
    },
    [setTodoList],
  );

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
        onChange={toggleItemCompletion}
      />
      {isComplete ? <del>{text}</del> : <span>{text}</span>}
      <button type="button" onClick={onDeleteItemHandler}>
        X
      </button>
    </div>
  );
};
