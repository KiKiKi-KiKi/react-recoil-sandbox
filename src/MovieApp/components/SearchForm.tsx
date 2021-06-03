import { useCallback, useState, VFC } from 'react';

export const SearchForm: VFC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChangeSearchValue = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(evt.currentTarget.value);
    },
    [],
  );

  const resetSearchField = useCallback(() => {
    setSearchValue('');
  }, []);

  const handleCallSearchMovie = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const searchText = searchValue.trim();

    if (!searchText) {
      return;
    }

    // TODO: Search Movie by searchText

    resetSearchField();
  };

  return (
    <form className="search" onSubmit={handleCallSearchMovie}>
      <input
        type="text"
        value={searchValue}
        onChange={handleChangeSearchValue}
        autoFocus={true}
      />
      <button type="submit">SEARCH</button>
    </form>
  );
};
