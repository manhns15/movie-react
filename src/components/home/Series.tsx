import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieItem from "../common-item/MovieItem";

const Series = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.movies.movies);
    const movies = data.filter((el: { Type: string }) => el.Type == 'series');
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, [dispatch]);

    return (
        <>
            <MovieItem items={movies} />
        </>
    )
}
export default Series