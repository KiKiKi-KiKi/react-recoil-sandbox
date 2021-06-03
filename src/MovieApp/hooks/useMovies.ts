import { useRecoilValue, useSetRecoilState } from 'recoil';
import { searchKeyState } from '../recoil/atoms/searchKeyState';
import { moviesState } from '../recoil/selectors/moviesState';
import { MovieItem } from '../models/omdbapi';
import { useCallback } from 'react';

interface UpdateHandler {
  update: (keyword: string) => void;
  reset: () => void;
}

export const useUpdateSearchKeyword = (): UpdateHandler => {
  const setter = useSetRecoilState(searchKeyState);

  const update = useCallback(
    (keyword: string): void => {
      const value = keyword.trim();
      if (!value) {
        return;
      }

      setter(value);
    },
    [setter],
  );

  const reset = useCallback(() => {
    setter('');
  }, [setter]);

  return {
    update,
    reset,
  };
};

export const useGetMovies = (): MovieItem[] => {
  const movies = useRecoilValue(moviesState);

  return movies || [];
};
