import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchMoviesSuccess, fetchMovieByIdSuccess } from '../actions/actions';
import { MovieActionTypes } from '../actions/types';
import movieService from '../api/movieAPI';

function* fetchMoviesSaga() {
  try {
    const response = yield call(movieService.getAllMovies);
    yield put(fetchMoviesSuccess(response.data));
  } catch (error) {
    console.log(error);
    
  }
}

function* fetchMovieByIdSaga(action: any) {
  try {
    const response = yield call(movieService.getMovie, action.payload.id);
    yield put(fetchMovieByIdSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* movieSaga() {
  yield takeLatest(MovieActionTypes.FETCH_MOVIES, fetchMoviesSaga );
  yield takeLatest(MovieActionTypes.FETCH_MOVIE_BY_ID, fetchMovieByIdSaga );
}


export default movieSaga;