import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
    } from "mdbreact";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Restaurant from './pages/Restaurant'

const App = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <MDBNavbar color="default-color" dark expand="md">
                <MDBNavbarToggler onClick={toggle} />
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar className="container">
                    <MDBNavbarBrand>
                        <img src={logo} className="App-logo" alt="logo" />
                    </MDBNavbarBrand>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <MDBNavLink to="/">Restaurant</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/favourite">Favourite</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
            <Switch>
                <Route exact path="/">
                    <Restaurant />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
