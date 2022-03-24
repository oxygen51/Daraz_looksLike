import React from "react";
import COD from "../images/payMent/cod.jpg"
import VISA from "../images/payMent/visa.png";
import MASTERCARD from "../images/payMent/mastercard.jpg";

const Footer2 = () => {
    return (
        <div className="container-flex" style={{ "background": "white", "height": "100%", "marginBottom": "50px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <p style={{ "float": "left" }}>Payment Method</p>
                        <img style={{ "height": "55px", "width": "55px", "marginLeft": "-257px", "marginTop": '31px' }} src={COD} />
                        <img style={{ "height": "30px", "width": "81px", "marginTop": '31px' }} src={VISA} />
                        <img style={{ "height": "51px", "width": "88px", "marginTop": '31px' }} src={MASTERCARD} />
                    </div>
                    <div className="col-3">
                        <p style={{ "float": "left" }}>Daraz International</p>
                    </div>
                    <div className="col-3">
                        <p style={{ "float": "left" }}>Follow Us</p>
                    </div>
                    <div className="col-3">
                        <p style={{ "float": "left" }}>Verified by</p>
                    </div>
                </div>
                <p style={{ "float": "left", "marginTop": "10px" }}>© Daraz 2022</p>
            </div>
        </div>
    );
}
export default Footer2;