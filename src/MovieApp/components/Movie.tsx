import { VFC } from 'react';
import { DEFAULT_PLACEHOLDER_IMAGE } from '../config';

interface MovieProps {
  title: string;
  poster: string;
  year: string;
}

export const Movie: VFC<MovieProps> = ({ title, poster, year }) => {
  const thumb = poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : poster;

  return (
    <div className="movie">
      <h2>{title}</h2>
      <div>
        <img src={thumb} width="200" alt={title} />
      </div>
      <small>{year}</small>
    </div>
  );
};
