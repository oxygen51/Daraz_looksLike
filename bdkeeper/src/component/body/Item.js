import React from "react";
import icon1 from "../images/i1.gif";
import icon2 from "../images/i2.gif";
import icon4 from "../images/i4.gif";
import icon5 from "../images/i5.gif";
import { Link } from "react-router-dom";
import { FcNext } from 'react-icons/fc';

const Item = () => {
    return (
        <div className="container-flex" style={{ "background": "#F5F5F5", "height": "60px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-2 rounded" style={{ "marginRight": "2%", "height": "35px", "background": "white", "textAlign": "left", "marginTop": "10px", "width": "18%" }}>
                        <div style={{ "marginLeft": "170px", "fontSize": "large", "paddingTop": "4px" }}>
                            <FcNext />
                        </div>
                        <Link style={{ "textDecoration": "none", "padding": "30px" }}><img style={{ "height": "30px", "width": "30px", "marginLeft": "-38px", "marginTop": "-55px" }} src={icon1} />
                            <p style={{ "marginLeft": "30px", "marginTop": "-49px" }}>Mall</p>
                        </Link>
                    </div>
                    <div className="col-2 rounded" style={{ "marginRight": "2%", "height": "35px", "background": "white", "textAlign": "left", "marginTop": "10px", "width": "18%" }}>
                        <div style={{ "marginLeft": "170px", "fontSize": "large", "paddingTop": "4px" }}>
                            <FcNext />
                        </div>
                        <Link style={{ "textDecoration": "none", "padding": "30px" }}><img style={{ "height": "30px", "width": "30px", "marginLeft": "-38px", "marginTop": "-55px" }} src={icon2} />
                            <p style={{ "marginLeft": "30px", "marginTop": "-49px" }}>Free Shipping</p>
                        </Link>
                    </div>
                    <div className="col-2 rounded" style={{ "marginRight": "2%", "height": "35px", "background": "white", "textAlign": "left", "marginTop": "10px", "width": "18%" }}>
                        <div style={{ "marginLeft": "170px", "fontSize": "large", "paddingTop": "4px" }}>
                            <FcNext />
                        </div>
                        <Link style={{ "textDecoration": "none", "padding": "30px" }}><img style={{ "height": "30px", "width": "30px", "marginLeft": "-38px", "marginTop": "-55px" }} src={icon1} />
                            <p style={{ "marginLeft": "30px", "marginTop": "-49px" }}>Super Market</p>
                        </Link>
                    </div>
                    <div className="col-2 rounded" style={{ "marginRight": "2%", "height": "35px", "background": "white", "textAlign": "left", "marginTop": "10px", "width": "18%" }}>
                        <div style={{ "marginLeft": "170px", "fontSize": "large", "paddingTop": "4px" }}>
                            <FcNext />
                        </div>
                        <Link style={{ "textDecoration": "none", "padding": "30px" }}><img style={{ "height": "30px", "width": "30px", "marginLeft": "-38px", "marginTop": "-55px" }} src={icon4} />
                            <p style={{ "marginLeft": "30px", "marginTop": "-49px" }}>Fashion</p>
                        </Link>
                    </div>
                    <div className="col-2 rounded" style={{ "marginRight": "2%", "height": "35px", "background": "white", "textAlign": "left", "marginTop": "10px", "width": "18%" }}>
                        <div style={{ "marginLeft": "170px", "fontSize": "large", "paddingTop": "4px" }}>
                            <FcNext />
                        </div>
                        <Link style={{ "textDecoration": "none", "padding": "30px" }}><img style={{ "height": "30px", "width": "30px", "marginLeft": "-38px", "marginTop": "-55px" }} src={icon5} />
                            <p style={{ "marginLeft": "30px", "marginTop": "-49px" }}>Beauty & Glamour</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Item;