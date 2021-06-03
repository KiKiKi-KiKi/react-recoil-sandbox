import { VFC } from 'react';
import { useMovies } from '../hooks/useMovies';
import { MovieList } from './MovieList';

interface MovieContainerProps {
  keyword: string;
}

export const MovieContainer: VFC<MovieContainerProps> = ({ keyword }) => {
  const { loading, data, error } = useMovies(keyword);

  return (
    <div className="moviesContainer">
      {loading ? (
        <span>Loading ...</span>
      ) : error ? (
        <div className="errorMessage">{error}</div>
      ) : (
        <MovieList movies={data} />
      )}
    </div>
  );
};
