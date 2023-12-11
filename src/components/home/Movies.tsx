import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieItem from "../common-item/MovieItem";

const Movies = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.movies.movies);
    const movies = data.filter((el: { Type: string }) => el.Type == 'movie');
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, [dispatch]);


    return (
        <>
            <MovieItem items={movies} />
        </>
    )
}
export default Movies