import { call, put, takeEvery } from 'redux-saga/effects';
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

function* fetchMovieByIdSaga(action:any) {
  try {
    const response = yield call(movieService.getMovie, action.payload.id);
    yield put(fetchMovieByIdSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

// function* payMovieSaga(action: any) {
//   try {
//     const { id, data } = action.payload;
//     const response = yield call(movieService.updateMovie, id, data);
//     yield put(payMovieSuccess(response.data));
//   } catch (error) {
//     console.log(error);
//     ;
//   }
// }

function* movieSaga() {
  yield takeEvery(MovieActionTypes.FETCH_MOVIES, fetchMoviesSaga );
  yield takeEvery(MovieActionTypes.FETCH_MOVIE_BY_ID, fetchMovieByIdSaga );
  // yield takeEvery(MovieActionTypes.PAY_MOVIE, payMovieSaga );
}


export default movieSaga;