import { MovieActionTypes, Movie } from "./types";

export const fetchMovies = () => ({
  type: MovieActionTypes.FETCH_MOVIES,
});

export const fetchMoviesSuccess = (movies: Movie[]) => ({
  type: MovieActionTypes.FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMovieById = (id: number) => ({
  type: MovieActionTypes.FETCH_MOVIE_BY_ID,
  payload: { id },
});

export const fetchMovieByIdSuccess = (data: {}) => ({
  type: MovieActionTypes.FETCH_MOVIE_BY_ID_SUCCESS,
  payload: data,
});

// export const payMovie = (id: number, data: Movie) => ({
//   type: MovieActionTypes.PAY_MOVIE,
//   payload: { id, data },
// });
// export const payMovieSuccess = (data: {}) => ({
//   type: MovieActionTypes.PAY_MOVIE_SUCCESS,
//   payload: data,
// });