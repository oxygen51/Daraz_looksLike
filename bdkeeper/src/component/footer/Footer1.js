import React from "react";
import qr1 from "../images/qr.png";
import iconDaraz from "../images/iconDaraz.png";
import androidICON from "../images/android.png";
import appleICON from "../images/apple.png";
import appgallery from "../images/appgallery.png";
import { Link } from "react-router-dom";

const Footer1 = () => {
    return (
        <div className="container-flex" style={{ "background": "#2E2E54", "marginTop": "5px", "marginBottom": "10px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="col-3" style={{ "width": "25%", "overflow": "hidden" }}>
                            <p style={{ "color": "white", "textAlign": "left", "display": "block", "marginLeft": "13px", "marginTop": "18px" }}>Customer Care</p>
                            <div style={{ "display": "inline-block", "marginTop": "-7px", "lineHeight": "2px" }}>
                                <Link to="/" className="nav-link" style={{ "fontSize": "12px", "color": "white", "textAlign": "left", "margin": "0 auto" }}>Help Center</Link>
                                <Link to="/" className="nav-link" style={{ "fontSize": "12px", "color": "white", "textAlign": "left" }}>How To Buy</Link>
                                <Link to="/" className="nav-link" style={{ "fontSize": "12px", "color": "white", "textAlign": "left" }}>Returns & Refunds</Link>
                                <Link to="/" className="nav-link" style={{ "fontSize": "12px", "color": "white", "textAlign": "left" }}>Contact Us</Link>
                                <Link to="/" className="nav-link" style={{ "fontSize": "12px", "color": "white", "textAlign": "left" }}>Terms & Conditions</Link>
                            </div>
                            <p style={{ "color": "white", "textAlign": "left", "display": "block", "marginLeft": "13px", "marginTop": "18px" }}>Earn With Daraz</p>
                            <div style={{ "display": "inline-block", "marginLeft": "-17px", "marginTop": "-7px", "lineHeight": "2px" }}>
                                <Link to="/" className="nav-link" style={{ "fontSize": "12px", "color": "white", "textAlign": "left", "margin": "0 auto" }}>Daraz University</Link>
                                <Link to="/" className="nav-link" style={{ "fontSize": "12px", "color": "white", "textAlign": "left" }}>Sell on Daraz</Link>
                                <Link to="/" className="nav-link" style={{ "fontSize": "12px", "color": "white", "textAlign": "left" }}>Code of Conduct</Link>
                                <Link to="/" className="nav-link" style={{ "fontSize": "12px", "color": "white", "textAlign": "left" }}>Join the Daraz </Link>
                            </div>
                        </div>
                        <div className="col-3" style={{ "marginLeft": "260px", "marginTop": "-237px", "width": "25%", "overflow": "hidden", "marginBottom": "25px" }}>
                            <p style={{ "color": "white", "textAlign": "left", "marginLeft": "13px", "marginTop": "18px" }}>Daraz</p>
                            <div style={{ "display": "inline-block", "marginTop": "-7px", "lineHeight": "2px" }}>
                                <Link to="/" className="nav-link" style={{ "fontSize": "12px", "color": "white", "textAlign": "left", "margin": "0 auto" }}>About Daraz</Link>
                                <Link to="/" className="nav-link" style={{ "fontSize": "12px", "color": "white", "textAlign": "left" }}>Digital Payments</Link>
                                <Link to="/" className="nav-link" style={{ "fontSize": "12px", "color": "white", "textAlign": "left" }}>Careers</Link>
                                <Link to="/" className="nav-link" style={{ "fontSize": "12px", "color": "white", "textAlign": "left" }}>Daraz blog</Link>
                                <Link to="/" className="nav-link" style={{ "fontSize": "12px", "color": "white", "textAlign": "left" }}>Amar Daraz</Link>
                                <Link to="/" className="nav-link" style={{ "fontSize": "12px", "color": "white", "textAlign": "left" }}>dMart</Link>
                                <Link to="/" className="nav-link" style={{ "fontSize": "12px", "color": "white", "textAlign": "left" }}>Privacy Policy</Link>
                                <Link to="/" className="nav-link" style={{ "fontSize": "12px", "color": "white", "textAlign": "left" }}>Daraz App</Link>
                                <Link to="/" className="nav-link" style={{ "fontSize": "12px", "color": "white", "textAlign": "left" }}>Daraz Exclusives</Link>
                                <Link to="/" className="nav-link" style={{ "fontSize": "12px", "color": "white", "textAlign": "left" }}>Hungrynaki Food</Link>
                                <Link to="/" className="nav-link" style={{ "fontSize": "12px", "color": "white", "textAlign": "left" }}>BD Cricket Live</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <Link to="/"><img style={{ "width": "100px", "borderRadius": "10px", "float": "left", "marginTop": "23px" }} src={qr1} /></Link>
                        <Link to="/"><img style={{ "width": "42px", "height": "42px", "borderRadius": "10px", "marginTop": "37px", "float": "left", "marginLeft": "20px" }} src={iconDaraz} /><span style={{ "color": "#F85606", "float": "left", "marginTop": "80px", "marginLeft": "-41px", "fontSize": "15px" }}>Happy Shopping</span><span style={{ "color": "white", "float": "left", "marginTop": "100px", "marginLeft": "-110px", "fontSize": "15px" }}>Download App</span></Link>
                        <Link to="/"><img style={{ "width": "134px", "height": "40px", "borderRadius": "10px", "float": "left", "marginTop": "136px", "marginLeft": "-232px" }} src={appleICON} /></Link>
                        <Link to="/"><img style={{ "width": "134px", "height": "40px", "borderRadius": "10px", "float": "left", "marginTop": "136px", "marginLeft": "-90px" }} src={androidICON} /></Link>
                        <Link to="/"><img style={{ "width": "134px", "height": "40px", "borderRadius": "10px", "float": "left", "marginTop": "136px", "marginLeft": "9px" }} src={appgallery} /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer1;