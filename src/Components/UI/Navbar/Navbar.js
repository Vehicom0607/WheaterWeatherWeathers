import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import classes from './Navbar.module.css'

const TopNavbar = () => {
    return (
        <Navbar className={classes.Navbar} variant="dark" expand="lg">
            <Navbar.Brand>Whether Weather</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link href='https://github.com/Vehicom0607/WheaterWeatherWeathers'>Github</Nav.Link>
                    <Nav.Link disabled >Auth</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopNavbar