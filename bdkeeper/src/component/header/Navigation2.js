import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, FormControl, Button, Form } from "react-bootstrap";
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import { FaSearch } from 'react-icons/fa';
import { BsCart2 } from 'react-icons/bs';

class Navigation2 extends Component {
    render() {
        return (
            <Navbar className="upper2" bg="white" expand="lg" style={{ "marginBottom": "10px" }}>
                <Container fluid>
                    <Link to="/"><img style={{ "height": "35px", "marginLeft": "100px", "marginRight": "70px" }} src={img1} /></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse>
                        <Form className="d-flex">
                            <FormControl style={{ "width": "650px", "background": "#F5F5F5", "fontSize": "13px", "border": "none" }}
                                type="search"
                                placeholder="Search in Daraz"
                                className=""
                                aria-label="Search"
                            />
                            <Button style={{ "background": "#F57224", "border": "none", "marginRight": "20px", "width": "45px" }}><FaSearch /></Button>
                            <Button style={{ "border": "none", "background": "white", "color": "black", "fontSize": "x-large" }}><BsCart2 /></Button>
                            <img style={{ "height": "35px", "marginRight": "80px", "marginLeft": "80px", "marginTop": "8px" }} src={img2} />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        );
    }
}

export default Navigation2;
















