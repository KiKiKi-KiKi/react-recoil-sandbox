import { VFC } from 'react';
import './app.css';
import { Header } from './components/Header';
import { SearchForm } from './components/SearchForm';

export const MovieApp: VFC = () => {
  return (
    <div className="movieApp">
      <Header title="My Movie App" />
      <SearchForm />
      <p className="App-intro">Sharing a few of our favorite movies</p>
      <div className="movies">MovieApp</div>
    </div>
  );
};
