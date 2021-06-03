import { useCallback, useState, VFC } from 'react';

interface SearchFormProp {
  onSearch: (value: string) => void;
}

export const SearchForm: VFC<SearchFormProp> = ({ onSearch }) => {
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

    onSearch(searchText);

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
