import { VFC } from 'react';
import './app.css';
import { Header } from './components/Header';
import { SearchForm } from './components/SearchForm';
import { MovieContainer } from './components/MovieContainer';

export const MovieApp: VFC = () => {
  return (
    <div className="movieApp">
      <Header title="My Movie App" />
      <SearchForm />
      <p className="App-intro">Sharing a few of our favorite movies</p>
      <MovieContainer />
    </div>
  );
};
