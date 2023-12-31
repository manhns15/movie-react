import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import ImageItem from './ImageItem';
import { FC } from 'react';
import { Movie } from '../../actions/types';
import { useNavigate } from 'react-router-dom';

type sliderProps = {
    items: Movie[];
}
const Slider: FC<sliderProps> = ({ items }) => {
    const navigate = useNavigate();

    const handleNavigate = (id: number) => {
        navigate(`/movie-detail/${id}`);
    };
    const handleNavigatePayment = (id: number) => {
        navigate(`/payment/${id}`);
    };
    console.log(items);
    
    return (
        <>
            <Slide>
                {items.slice(0, 6).map((item, index) => {
                    return (
                        <div className="mv__right--slider" key={index}>
                            <div className="mv__right--slider-item">
                                <ImageItem src={item.Poster} alt="" className="mv__right--item-img" />
                                <h1>{item.Title}</h1>
                                <div className="mv__right--slider-detail">
                                    <ul>
                                        <li><span>{item?.Director}</span></li>
                                        <li><span>{item?.Year}</span></li>
                                        <li><span>{item?.imdbVotes} views</span></li>
                                        <li><span>{item?.Country}</span></li>
                                    </ul>
                                </div>
                                {item.IsPayment ? <button type="button" className="btn btn-primary" onClick={() => handleNavigate(item.id)}><i className="bi bi-badge-4k-fill"></i> Watch Now</button> : <button type="button" className="btn btn-opacity" onClick={() => handleNavigatePayment(item.id)}><i className="bi bi-cart-plus-fill"></i>
                                    Buy Now</button>}
                            </div>
                        </div>
                    )
                })}

            </Slide>
        </>
    )
}
export default Slider;