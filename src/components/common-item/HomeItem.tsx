import { FC } from "react";
import ImageItem from "./ImageItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Movie } from "../../actions/types";
import { useNavigate } from "react-router-dom";


interface ItemsProps {
    items: Movie[];
}
const HomeItem: FC<ItemsProps> = ({ items }) => {
    const navigate = useNavigate();

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1581 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1580, min: 1280 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1279, min: 1025 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 1024, min: 0 },
            items: 2
        }
    };
    const handleNavigate = (id: number) => {
        navigate(`/movie-detail/${id}`);
    };
    return (
        <>
            <Carousel responsive={responsive}>
                {items?.map((item, index) => {

                    return (
                        <div className="mv__right--item" key={index} onClick={() => handleNavigate(item.id)}>
                            <div className="mv__right--item-icPlay">
                                <i className="bi bi-play-circle-fill"></i>
                            </div>
                            <ImageItem src={item.Images} alt="Example Image" className="mv__right--item-img" />
                            <p className="mv__right--item-name">{item.Title}</p>
                            <div className="mv__right--item-star">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div className="mv__right--item-info">
                                <span>{item.Released}</span>
                                <span><i className="bi bi-clock"></i> {item.Runtime}</span>
                            </div>
                        </div>
                    )
                }
                )}
            </Carousel>
        </>
    )
}
export default HomeItem;