import {
  TodoIdType,
  TodoItemInterface,
  TodoListInterface,
} from './recoil/atoms/todoListState';

type ReplaceItemProps = [TodoIdType, Partial<TodoItemInterface>];

export const replaceItem = (list: TodoListInterface) => ([
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

export const removeItem = (list: TodoListInterface) => (
  id: TodoIdType,
): TodoListInterface => {
  const deleteIndex = list.findIndex(([itemId]) => itemId === id);

  return [...list.slice(0, deleteIndex), ...list.slice(deleteIndex + 1)];
};
