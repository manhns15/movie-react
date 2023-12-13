import { useDispatch, useSelector } from "react-redux";
import { fetchMovieById } from "../../actions/actions";
import { SetStateAction, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import movieService from "../../api/movieAPI";
import { MovieState } from "../../actions/types";

const Payment = () => {
    const [selectedValue, setSelectedValue] = useState('napas');
    const handleRadioChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedValue(event.target.value);
    };


    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1);
    };

    const dispatch = useDispatch();
    const { id } = useParams();
    const movieId = parseInt(id, 10);
    const data = useSelector((state:MovieState) => state.movie.movie);

    useEffect(() => {
        if (!isNaN(movieId)) {
            dispatch(fetchMovieById(movieId));
          }
    }, [dispatch,movieId]);

    const handlePayMovie = (id: number) => {
        //  dispatch(payMovie(id, { ...data, IsPayment: true }));
        movieService.updateMovie(id, { ...data, IsPayment: true, PaymentMethod: selectedValue }).then((res) => {
            if (res) {
                alert('You have successfully paid');
                navigate(`/movie-detail/${id}`)
            }
        }).catch((err) => {
            console.log(err);

        });
    };


    return (
        <>
            <div className="mv__pay">
                <div className="container">
                    <div className="mv__pay--back">
                        <div className="" >
                            <div className="mv__pay--back-item" onClick={goBack}>
                                <button type="button" className="btn btn-opacity btn-sm"><i className="bi bi-chevron-left"></i>
                                </button>
                                <span>Back home</span>
                            </div>
                        </div>
                    </div>
                    <div className="mv__pay--heading">
                        <p>Payment ManhNS Movie</p>

                    </div>
                    <div className="mv__pay--content">
                        <div className="mv__pay--left">
                            <p>Selected package</p>

                            <div className="mv__pay--left-pack" >
                                <span >Watch movies with a permanent movie package</span>
                                <span>{data?.Price} $</span>

                            </div>
                            <p>Payment methods</p>
                            <label className="mv__pay--left-item" htmlFor="napas">
                                <input name="radio" id="napas" type="radio" value="napas"
                                    checked={selectedValue === 'napas'}
                                    onChange={handleRadioChange} />
                                <img src="/images/atm-card.png" alt="" />
                                <span >Napas credit card</span>
                            </label>
                            <label className="mv__pay--left-item" htmlFor="visa">
                                <input name="radio" id="visa" type="radio" value="visa"
                                    checked={selectedValue === 'visa'}
                                    onChange={handleRadioChange} />
                                <img src="/images/visa.png" alt="" />
                                <span >Visa card</span>
                            </label>
                            <label className="mv__pay--left-item" htmlFor="momo">
                                <input name="radio" id="momo" type="radio" value="momo"
                                    checked={selectedValue === 'momo'}
                                    onChange={handleRadioChange} />
                                <img src="/images/MoMo_Logo.png" alt="" />
                                <span >Momo wallet</span>
                            </label>
                            <label className="mv__pay--left-item" htmlFor="shopeepay">
                                <input name="radio" id="shopeepay" type="radio" value="shopeepay"
                                    checked={selectedValue === 'shopeepay'}
                                    onChange={handleRadioChange} />
                                <img src="/images/shopee-pay.jpeg" alt="" />
                                <span >ShoppePay wallet</span>
                            </label>
                            <label className="mv__pay--left-item" htmlFor="zalopay">
                                <input name="radio" id="zalopay" type="radio" value="zalopay"
                                    checked={selectedValue === 'zalopay'}
                                    onChange={handleRadioChange} />
                                <img src="/images/zalo-pay.png" alt="" />
                                <span >ZaloPay wallet</span>
                            </label>
                        </div>
                        <div className="mv__pay--right">
                            <div className="mv__pay--info">
                                <p>Billing Information</p>
                                <div className="mv__pay--info-acc">
                                    <span>Account</span>
                                    <span>ManhNS1</span>
                                </div>
                                <hr />
                                <div className="mv__pay--info-pack">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Movie Name</td>
                                                <td>{data?.Title}</td>
                                            </tr>
                                            <tr>
                                                <td>Service pack</td>
                                                <td>ManhNS Movie</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <hr />
                                <div className="mv__pay--info-price">
                                    <span>Price</span>
                                    <span>{data?.Price}$</span>
                                </div>
                                <hr />
                                <div className="mv__pay--info-total">
                                    <span>Total: </span>
                                    <span>{data?.Price}$</span>
                                </div>
                                <div className="mv__pay--info-btn">
                                    <button type="button" className="btn btn-primary" onClick={() => handlePayMovie(data?.id)}>Payment</button>
                                </div>
                                <span className="mv__pay--info-desc">By accepting payment, Customer agrees to the terms and conditions of using the ManhNS Movie service, and authorizes ManhNS Movie to automatically renew upon expiration.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Payment;