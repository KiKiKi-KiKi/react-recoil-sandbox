import { useCallback, useState, VFC } from 'react';
import {
  useSetTodoListFilter,
  FilterTypeKeys,
} from '../hooks/useSetTodoListFilter';

export const TodoListFilter: VFC = () => {
  const { setFilter, getFilterTypeByKey } = useSetTodoListFilter();
  const [selectVal, setSelectVal] = useState<FilterTypeKeys>(0);

  const onChnageHandler = useCallback(
    (evt: React.ChangeEvent<HTMLSelectElement>) => {
      const key = Number(evt.currentTarget.value) as FilterTypeKeys;
      setSelectVal(key);
      setFilter(getFilterTypeByKey(key));
    },
    [setFilter, getFilterTypeByKey],
  );

  return (
    <div>
      Filter:
      <select value={selectVal} onChange={onChnageHandler}>
        <option value={0}>ALL</option>
        <option value={1}>Complete</option>
        <option value={2}>Uncomplete</option>
      </select>
    </div>
  );
};
