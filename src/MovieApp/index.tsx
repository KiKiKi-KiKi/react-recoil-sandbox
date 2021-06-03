import { useState, useCallback, VFC } from 'react';
import './app.css';
import { Header } from './components/Header';
import { SearchForm } from './components/SearchForm';
import { MovieContainer } from './components/MovieContainer';

export const MovieApp: VFC = () => {
  const [keyword, setKeyword] = useState<string>('');

  const handleSearch = useCallback((keyword: string) => {
    setKeyword(keyword);
  }, []);

  console.log(keyword);

  return (
    <div className="movieApp">
      <Header title="My Movie App" />
      <SearchForm onSearch={handleSearch} />
      <p className="App-intro">Sharing a few of our favorite movies</p>
      {keyword && <MovieContainer keyword={keyword} />}
    </div>
  );
};
