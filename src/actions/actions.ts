import { MovieActionTypes, Movie } from "./types";

export const fetchMovies = (page: number, limit: number) => ({
  type: MovieActionTypes.FETCH_MOVIES,
  payload: { page ,limit }
});

export const fetchMoviesSuccess = (movies: Movie[]) => ({
  type: MovieActionTypes.FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (error: string) => ({
  type: MovieActionTypes.FETCH_MOVIES_FAILURE,
  payload: error,
});

export const fetchMovieById = (id: number) => ({
  type: MovieActionTypes.FETCH_MOVIE_BY_ID,
  payload: { id },
});

export const fetchMovieByIdSuccess = (data: {}) => ({
  type: MovieActionTypes.FETCH_MOVIE_BY_ID_SUCCESS,
  payload: data,
});