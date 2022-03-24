import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <Navbar className="upper" collapseOnSelect expand="lg" style={{ "background": "#ECECEC", "height": "30px" }}>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" style={{ "marginLeft": "200px" }}>
                            {/* <Nav.Link href="#features" style={{ "fontSize": "12px", "marginRight": "21px", "color": "black" }}>SAVE MORE ON APP</Nav.Link>
                            <Nav.Link href="#features" style={{ "fontSize": "12px", "marginRight": "21px", "color": "black" }}>SELL ON DARAZ</Nav.Link>
                            <Nav.Link href="#features" style={{ "fontSize": "12px", "marginRight": "21px", "color": "black" }}>CUSTOMER CARE</Nav.Link>
                            <Nav.Link href="#features" style={{ "fontSize": "12px", "marginRight": "21px", "color": "black" }}>TRACK MY ORDER</Nav.Link>
                            <Nav.Link href="/Login" style={{ "fontSize": "12px", "marginRight": "21px", "color": "black" }}>SIGNUP / LOGIN</Nav.Link>
                            <Nav.Link href="#pricing" style={{ "fontSize": "12px", "marginRight": "21px", "color": "black" }}>DARAZ AFFILIATED PROGRAM</Nav.Link>
                            <Nav.Link href="#pricing" style={{ "fontSize": "12px", "marginRight": "21px", "color": "black" }}>ভাষা</Nav.Link> */}
                            <Link to="/App" className="nav-link active" style={{ "fontSize": "12px", "marginRight": "21px", "color": "#FF5300" }}>SAVE MORE ON APP</Link>
                            <Link to="/SellerLogin" className="nav-link" style={{ "fontSize": "12px", "marginRight": "21px", "color": "black" }}>SELL ON DARAZ</Link>
                            <Link to="/CustomerCare" className="nav-link" style={{ "fontSize": "12px", "marginRight": "21px", "color": "black" }}>CUSTOMER CARE</Link>
                            <Link to="/TrackOrder" className="nav-link" style={{ "fontSize": "12px", "marginRight": "21px", "color": "black" }}>TRACK MY ORDER</Link>
                            <Link to="/Login" className="nav-link" style={{ "fontSize": "12px", "marginRight": "21px", "color": "black" }}>SIGNUP / LOGIN</Link>
                            <Link to="/Affiliated" className="nav-link" style={{ "fontSize": "12px", "marginRight": "21px", "color": "black" }}>DARAZ AFFILIATED PROGRAM</Link>
                            <Link to="/" className="nav-link" style={{ "fontSize": "12px", "marginRight": "21px", "color": "black" }}>ভাষা</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Navigation;
















