import { useState, useCallback, VFC } from 'react';
import './app.css';
import { Header } from './components/Header';
import { SearchForm } from './components/SearchForm';
import { MovieList } from './components/MovieList';
import { MOVIE_API_URL } from './config';
import { MovieItem, SearchResultInterface } from './models/omdbapi';

const getSearchMovieUrl = (searchValue: string): string => {
  return `${MOVIE_API_URL}&s=${searchValue}`;
};

export const MovieApp: VFC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<MovieItem[]>([]);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const handleSearch = useCallback(async (searchValue: string) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch(getSearchMovieUrl(searchValue));
      const json = (await res.json()) as SearchResultInterface;

      console.log(json);

      if (json.Response === 'False') {
        throw { message: json.Error };
      }

      setMovies(json.Search || []);
      setLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }, []);

  return (
    <div className="movieApp">
      <Header title="My Movie App" />
      <SearchForm onSearch={handleSearch} />
      <p className="App-intro">Sharing a few of our favorite movies</p>
      {loading ? (
        <span>Loading...</span>
      ) : errorMessage ? (
        <div className="errorMessage">{errorMessage}</div>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};
