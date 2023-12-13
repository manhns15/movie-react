export interface Movie {
  movie: any;
  id: number,
  Title: string,
  Year: string,
  Rated: string,
  Released: string,
  Runtime: string,
  Genre: string,
  Director: string,
  Writer: string,
  Actors: string,
  Plot: string,
  Language: string,
  Country: string,
  Awards: string,
  Poster: string,
  totalSeasons: string,
  Metascore: string,
  imdbRating: string,
  imdbVotes: string,
  imdbID: string,
  Type: string,
  Response: string,
  Images: string,
  Trailer: string,
  Performer: [],
  IsPayment: boolean,
  Price: number,
  PaymentMethod: string
}
export interface MovieState {
  movies?: Movie[],
  movie?: {
    movie: Movie;
  };
}


export enum MovieActionTypes {
  FETCH_MOVIES = 'FETCH_MOVIES',
  FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',

  FETCH_MOVIE_BY_ID = 'FETCH_MOVIE_BY_ID',
  FETCH_MOVIE_BY_ID_SUCCESS = 'FETCH_MOVIE_BY_ID_SUCCESS',
  
  // PAY_MOVIE = 'PAY_MOVIE',
  // PAY_MOVIE_SUCCESS = 'PAY_MOVIE_SUCCESS'
}