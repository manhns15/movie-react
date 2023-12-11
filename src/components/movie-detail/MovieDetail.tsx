import { useDispatch, useSelector } from "react-redux";
import { fetchMovieById } from "../../actions/actions";
import { Key, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImageItem from "../common-item/ImageItem";
import CustomVideoPlayer from "../common-item/VideoPlayer";

const MovieDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { id } = useParams();
    const data = useSelector((state) => state.movies.movie);

    useEffect(() => {
        dispatch(fetchMovieById(id));
    }, [dispatch]);

    const goBack = () => {
        navigate(-1);
    };
    return (
        <>
            <div className="mv__detail">
                <div className="mv__detail--bg">
                    <CustomVideoPlayer videoSource={data?.Trailer} autoPlay={true} autoRepeat={true} startTime={0} />

                </div>
                <div className="container">
                    <div className="mv__detail--back">
                        <div className="" >
                            <div className="mv__detail--back-item" onClick={goBack}>
                                <button type="button" className="btn btn-opacity btn-sm"><i className="bi bi-chevron-left"></i>
                                </button>
                                <span>Back home</span>
                            </div>
                        </div>
                    </div>
                    <div className="mv__detail--content">
                        <div className="mv__detail--left">
                            <h1 className="mv__detail--left-title">{data?.Title}</h1>
                            <div className="mv__detail--left-star">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <span className="mv__detail--left-views">{data?.Language} </span>
                            <div className="mv__detail--left-per">
                                {
                                    data?.Performer?.map((per: { image: string; name: string }, index: Key | null | undefined) => {
                                        return (
                                            <div className="mv__detail--left-perBl" key={index}>
                                                <div className="mv__detail--left-avt">
                                                    <ImageItem src={per?.image} className="" alt=""/>
                                                </div>
                                                <span className="mv__detail--left-nameInf">{per?.name}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="mv__detail--left-desc">
                                <p>
                                    {data?.Plot}
                                </p>
                            </div>
                            <div className="mv__detail--left-btn">

                                {data?.IsPayment ? <button type="button" className="btn btn-primary"><i class="bi bi-badge-4k-fill"></i> Watch now</button>
                                    : <button type="button" className="btn btn-opacity"><i className="bi bi-cart-plus-fill"></i> Buy Now {data?.Price} $</button>}

                            </div>

                        </div>
                        <div className="mv__detail--right">
                            <div className="mv__detail--right-demo">
                                <ImageItem src={data?.Images} alt="" className="mv__detail--right-img" />
                                <span className="mv__detail--right-rated">
                                    Top rated
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MovieDetail