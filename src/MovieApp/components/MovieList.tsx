import { VFC } from 'react';
import { useGetMovies } from '../hooks/useMovies';
import { Movie } from './Movie';

export const MovieList: VFC = () => {
  const movies = useGetMovies();

  return (
    <div className="movies">
      {movies.map((item, index) => (
        <Movie
          key={`${index}-${item.imdbID}`}
          title={item.Title}
          poster={item.Poster}
          year={item.Year}
        />
      ))}
    </div>
  );
};
