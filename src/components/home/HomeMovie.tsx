import HomeItem from "../common-item/HomeItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Slider from '../common-item/Slider';
import MovieItem from "../common-item/MovieItem";
const HomeMovie = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.movies.movies);
    const bestMovies = data?.filter((el: { imdbRating: string | number; }) => el.imdbRating > '7.6' && el.imdbRating != 'N/A');
    const newMovies = data?.filter((el: { Year: string | number; }) => el.Year > '2010' && el.Year != 'N/A');

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, [dispatch]);
    return (
        <>
            <section>
                <Slider items={data} />
            </section>
            <section>
                <div className="mv__right--content">
                    <div className="">
                        <h3>Top Rated Movies</h3>
                        <HomeItem items={bestMovies} />
                    </div>

                    <div className="">
                        <h3>Top New Movies</h3>
                        <HomeItem items={newMovies} />
                    </div>
                    <div className="">
                        <h3>All Movies</h3>
                        <MovieItem items={data} />
                    </div>

                </div>
            </section>

        </>
    )
}
export default HomeMovie

