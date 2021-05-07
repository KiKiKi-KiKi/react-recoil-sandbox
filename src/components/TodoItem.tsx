import { useCallback, VFC } from 'react';
import {
  TodoItem as TodoItemProps,
  todoListState,
} from '../recoil/atoms/todoListState';
import { useSetRecoilState } from 'recoil';

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

  return (
    <div id={id}>
      <input
        type="checkbox"
        checked={isComplete}
        onChange={toggleItemCompletion}
      />
      {isComplete ? <del>{text}</del> : <span>{text}</span>}
    </div>
  );
};
