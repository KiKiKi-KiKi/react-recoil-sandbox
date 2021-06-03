// cf. https://www.omdbapi.com/apiKye={API KEY}&s={key word}
/*
SearchResult = {
  Search: [
    {
      Title: 'Empire of the Tsars: Romanov Russia with Lucy Worsley',
      Year: '2016',
      imdbID: 'tt5459618',
      Type: 'series',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYTY4Nzk1ZGItZTM5OC00NzkxLWI0NTEtODVkZmY3ZDhiYzc1L2ltYWdlXkEyXkFqcGdeQXVyNTgwMTU1Nzc@._V1_SX300.jpg',
    },
  ],
  totalResults: '273',
  Response: 'True',
};

NotFoundMovieResponse = {
  "Response":"False",
  "Error":"Movie not found!"
}
*/

export interface MovieItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface SearchResultInterface {
  Response: 'True' | 'False';
  Error?: string;
  totalResults?: string;
  Search?: MovieItem[];
}
