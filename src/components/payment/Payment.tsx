import { useNavigate } from "react-router-dom";

const Payment = () => {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1);
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
                                <span>50 $</span>

                            </div>
                            <p>Payment methods</p>
                            <label className="mv__pay--left-item" htmlFor="radio1">
                                <input name="radio" id="radio1" type="radio" />
                                <img src="images/atm-card.png" alt="" />
                                <span >Napas credit card</span>
                            </label>
                            <label className="mv__pay--left-item" htmlFor="radio2">
                                <input name="radio" id="radio2" type="radio" />
                                <img src="images/visa.png" alt="" />
                                <span >Visa card</span>
                            </label>
                            <label className="mv__pay--left-item" htmlFor="radio3">
                                <input name="radio" id="radio3" type="radio" />
                                <img src="images/MoMo_Logo.png" alt="" />
                                <span >Momo wallet</span>
                            </label>
                            <label className="mv__pay--left-item" htmlFor="radio4">
                                <input name="radio" id="radio4" type="radio" />
                                <img src="images/shopee-pay.jpeg" alt="" />
                                <span >ShoppePay wallet</span>
                            </label>
                            <label className="mv__pay--left-item" htmlFor="radio5">
                                <input name="radio" id="radio5" type="radio" />
                                <img src="images/zalo-pay.png" alt="" />
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
                                                <td>The Avenger</td>
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
                                    <span>50.0$</span>
                                </div>
                                <hr />
                                <div className="mv__pay--info-total">
                                    <span>Total: </span>
                                    <span>50.0$</span>
                                </div>
                                <div className="mv__pay--info-btn">
                                    <button type="button" className="btn btn-primary">Payment</button>
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