import { combineReducers } from "redux";
import { MovieState, MovieActionTypes, Movie } from "../actions/types";

const initialState: MovieState = {
  movies: [],
  movie: null

};

const movieReducer = (state = initialState, action: any): MovieState => {
  switch (action.type) {
    case MovieActionTypes.FETCH_MOVIES:
      console.log('FETCH_MOVIES_STATE', state);
      console.log('FETCH_MOVIES', action);
      return { ...state };

    case MovieActionTypes.FETCH_MOVIES_SUCCESS:
      console.log('FETCH_MOVIES_SUCCESS_STATE',state);
      console.log('FETCH_MOVIES_SUCCESS',action);
      return {
        ...state, 
        movies: action.payload
      };

    case MovieActionTypes.FETCH_MOVIE_BY_ID_SUCCESS:
      console.log('FETCH_MOVIE_BY_ID_SUCCESS_STATE', state);
      console.log('FETCH_MOVIE_BY_ID_SUCCESS', action);
      return {
        ...state,
        movie: action.payload,
      };
    
    // case MovieActionTypes.PAY_MOVIE_SUCCESS:
    //   return{
    //     ...state,
    //     movies: state.movies.map((item: Movie) =>
    //     item.id === action.payload.id ? { ...item, ...action.payload } : item
    //   ),
    //   }
    default:
      return state;
  }
};

export default combineReducers({
  movies: movieReducer,
});