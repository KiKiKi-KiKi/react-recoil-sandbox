import { VFC } from 'react';
import { MovieItem } from '../models/omdbapi';
import { Movie } from './Movie';

interface MovieListProps {
  movies: MovieItem[];
}

export const MovieList: VFC<MovieListProps> = ({ movies }) => {
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
