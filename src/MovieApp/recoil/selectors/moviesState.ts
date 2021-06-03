import axios from 'axios';
import { selector } from 'recoil';
import { MOVIE_STATE } from '../keys';
import { searchKeyState } from '../atoms/searchKeyState';
import { MOVIE_API_URL } from '../../config';
import { MovieItem, SearchResultInterface } from '../../models/omdbapi';

const getSearchMovieUrl = (keyword: string): string => {
  return `${MOVIE_API_URL}&s=${keyword}`;
};

const fetcher = async (url: string): Promise<MovieItem[] | undefined> => {
  try {
    const res = await axios.get(url);
    const data = res.data as SearchResultInterface;

    if (data.Response !== 'True') {
      throw new Error(data.Error);
    }

    return data.Search;
  } catch (error) {
    const message = error.response?.data.error || error.message;
    throw new Error(message);
  }
};

export const moviesState = selector<MovieItem[] | undefined>({
  key: MOVIE_STATE,
  get: async ({ get }) => {
    const keyword = get(searchKeyState);

    console.log({ keyword });
    if (!keyword) {
      return;
    }

    const res = await fetcher(getSearchMovieUrl(keyword));

    return res;
  },
});
