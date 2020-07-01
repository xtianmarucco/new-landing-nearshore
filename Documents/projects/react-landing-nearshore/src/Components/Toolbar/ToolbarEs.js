import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    isOpen: false,
    urlDevlights: "https://devlights.com/es",
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <div className="row" id="nav-bar">
          <div className="container">
            <MDBNavbar
              dark
              expand="md"
              style={{ fontSize: 14, color: "#3333" }}
            >
              <MDBNavbarBrand>
                <a className="scrollto" href="#intro">
                  <img
                    className="img-fluid logo"
                    src="https://devlights.com/img/logo.png"
                    alt="Logo de devlights"
                  />
                </a>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse
                id="navbarCollapse3"
                isOpen={this.state.isOpen}
                navbar
              >
                <MDBNavbarNav className="float-right nav-items">
                  <MDBNavItem active>
                    <MDBNavLink
                      to="#!"
                      onClick={() =>
                        (window.location = `${this.state.urlDevlights}`)
                      }
                    >
                      Home
                    </MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      onClick={() =>
                        (window.location = `${this.state.urlDevlights}/#about`)
                      }
                    >
                      About
                    </MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      onClick={() =>
                        (window.location = `${this.state.urlDevlights}/#services`)
                      }
                    >
                      Services
                    </MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      onClick={() =>
                        (window.location = `${this.state.urlDevlights}/#portfolio`)
                      }
                    >
                      Portfolio
                    </MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      onClick={() =>
                        (window.location = `${this.state.urlDevlights}/#clients`)
                      }
                    >
                      Clients
                    </MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      onClick={() =>
                        (window.location = `${this.state.urlDevlights}/#careers`)
                      }
                    >
                      Careers
                    </MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      onClick={() =>
                        (window.location = `${this.state.urlDevlights}/#footer`)
                      }
                    >
                      Contact
                    </MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        <div className="d-none d-md-inline">ES</div>
                      </MDBDropdownToggle>

                      <MDBDropdownMenu className="dropdown-default">
                        <MDBDropdownItem href="/">EN</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </div>
        </div>
      </Router>
    );
  }
}

export default Navbar;
