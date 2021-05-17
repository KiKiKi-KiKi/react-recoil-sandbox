import { atom } from 'recoil';
import { TODOLISTFILTERSTATE } from '../keys';

export const showAll = 'FILTER/SHOWALL' as const;
export const showComplete = 'FILTER/SHOWCOMPLETE' as const;
export const showUncomplete = 'FILTER/SHOWUNCOMPLETE' as const;

export type FilterTypes =
  | typeof showAll
  | typeof showComplete
  | typeof showUncomplete;

export const todoListFilterState = atom<FilterTypes>({
  key: TODOLISTFILTERSTATE,
  default: showAll,
});
