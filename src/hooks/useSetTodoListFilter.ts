import { useCallback } from 'react';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';
import {
  todoListFilterState,
  FilterTypes,
  showAll,
  showComplete,
  showUncomplete,
} from '../recoil/atoms/todoListFilterState';

const FilterMap = {
  0: showAll,
  1: showComplete,
  2: showUncomplete,
} as const;

export type FilterTypeKeys = keyof typeof FilterMap;

interface IuseSetTodoListFilter {
  setFilter: SetterOrUpdater<FilterTypes>;
  getFilterTypeByKey: (key: FilterTypeKeys) => FilterTypes;
}

export const useSetTodoListFilter = (): IuseSetTodoListFilter => {
  const setFilter = useSetRecoilState(todoListFilterState);

  const getFilterTypeByKey = useCallback((key: FilterTypeKeys): FilterTypes => {
    return FilterMap[key];
  }, []);

  return {
    setFilter,
    getFilterTypeByKey,
  };
};
