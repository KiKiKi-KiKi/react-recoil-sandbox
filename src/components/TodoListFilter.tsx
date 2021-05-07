import { useCallback, useState, VFC } from 'react';
import { useSetRecoilState } from 'recoil';
import {
  todoListFilterState,
  FilterTypes,
  showAll,
  showComplete,
  showUncomplete,
} from '../recoil/atoms/todoListFilterState';

type FilterKeyType = 0 | 1 | 2;

const getFilterType = (key: FilterKeyType): FilterTypes => {
  return key === 0 ? showAll : key === 1 ? showComplete : showUncomplete;
};

export const TodoListFilter: VFC = () => {
  const setFilter = useSetRecoilState(todoListFilterState);
  const [selectVal, setSelectVal] = useState<FilterKeyType>(0);

  const onChnageHandler = useCallback(
    (evt: React.ChangeEvent<HTMLSelectElement>) => {
      const key = Number(evt.currentTarget.value) as FilterKeyType;
      setSelectVal(key);
      setFilter(getFilterType(key));
    },
    [setFilter],
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
