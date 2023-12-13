import { combineReducers } from "redux";
import { MovieState, MovieActionTypes, Movie } from "../actions/types";

const initialState:MovieState = {
  movies: [],
  movie: {
    movie: {} as Movie,
  },
};

const movieReducer = (state = initialState, action: { type: string; payload: any }): MovieState => {
  switch (action.type) {
    case MovieActionTypes.FETCH_MOVIES:
      return { ...state };

    case MovieActionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state, 
        movies: action.payload
      };

    case MovieActionTypes.FETCH_MOVIE_BY_ID_SUCCESS:
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