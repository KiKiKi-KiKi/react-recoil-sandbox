import { useCallback, useState, VFC } from 'react';
import { TodoItemInterface } from '../recoil/atoms/todoListState';
import { TodoItem } from './TodoItem';

export const TodoItemContainer: VFC<TodoItemInterface> = ({ id, ...props }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const changeMode = useCallback(
    (mode: boolean) => () => {
      setIsEdit(mode);
    },
    [],
  );

  return (
    <div id={id}>
      {isEdit ? (
        <>Edit</>
      ) : (
        <TodoItem id={id} {...props} onEditMode={changeMode(true)} />
      )}
    </div>
  );
};
