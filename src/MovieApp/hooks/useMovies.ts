import axios from 'axios';
import useSWR from 'swr';
import { MOVIE_API_URL } from '../config';
import { SearchResultInterface, MovieItem } from '../models/omdbapi';

const getSearchMovieUrl = (searchValue: string): string => {
  return `${MOVIE_API_URL}&s=${searchValue}`;
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

interface IuseMovies {
  loading: boolean;
  data: MovieItem[];
  error?: string;
}

export const useMovies = (keyword: string): IuseMovies => {
  console.log('hook', keyword);
  const { data, error } = useSWR<MovieItem[] | undefined, Error>(
    getSearchMovieUrl(keyword),
    fetcher,
  );

  return {
    loading: !data && !error,
    data: data || [],
    error: error?.message,
  };
};
