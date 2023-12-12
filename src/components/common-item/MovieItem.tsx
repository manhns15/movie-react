import { FC, useState } from "react";
import ImageItem from "./ImageItem";
import { Movie } from "../../actions/types";
import { useLocation, useNavigate } from "react-router-dom";

interface moviesProps {
    items: Movie[];
}
const MovieItem: FC<moviesProps> = ({ items }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const totalPages = Math.ceil(items?.length / pageSize);
    items.sort((firstItem, secondItem) =>  new Date(secondItem.Year).valueOf()  - new Date(firstItem.Year).valueOf());

    const handleNavigate = (id: number) => {
        navigate(`/movie-detail/${id}`);
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    }; 
    
    return (
        <>
            <div className="mv__list--movies" >
                {items.slice(startIndex, endIndex).map((item, index) => {
                    return (
                        <div className="mv__list--movies-item" key={index} onClick={() => handleNavigate(item.id)}>
                            <ImageItem src={item.Images} alt="" className="mv__list--movies-img" />
                            <div className="mv__list--movies-rated">{item.imdbRating}</div>
                            <div className="mv__list--movies-content">
                                <a href="javascript:void(0)" className="mv__list--movies-name">{item.Title}</a>
                                <div className="mv__list--movies-star">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <div className="mv__list--movies-info">
                                    <span className="mv__list--movies-date">{item.Released}</span>
                                    {
                                        location.pathname === '/series' ? <span >{item.totalSeasons} Ep</span> : ''
                                    }
                                </div>
                                <div className="mv__list--movies-desc">
                                    <span>{item.Actors}</span>
                                </div>
                            </div>
                        </div>

                    )
                })}

            </div>
            <div className='mv__pagination'>
                <button className={currentPage == 1 ? '' : 'btn-primary'} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage == 1 ? true : false}>
                    <i className="bi bi-chevron-left"></i>
                </button>
                <span > Page {currentPage} </span>
                <button className={currentPage == totalPages ? '' : 'btn-primary'} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage == totalPages ? true : false}><i className="bi bi-chevron-right"></i></button>
            </div>
        </>
    )
}
export default MovieItem