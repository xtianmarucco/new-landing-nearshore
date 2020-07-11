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
import "./toolbar.scss";

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
              expand="lg"
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
                <MDBNavbarNav className="float-right nav-items" right>
                  <MDBNavItem active>
                    <MDBNavLink
                      to="#!"
                      onClick={() =>
                        (window.location = `${this.state.urlDevlights}`)
                      }
                    >
                      Inicio
                    </MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      onClick={() =>
                        (window.location = `${this.state.urlDevlights}/#about`)
                      }
                    >
                      Nosotros
                    </MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      onClick={() =>
                        (window.location = `${this.state.urlDevlights}/#services`)
                      }
                    >
                      Servicios
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
                      Clientes
                    </MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      onClick={() =>
                        (window.location = `${this.state.urlDevlights}/#careers`)
                      }
                    >
                      Carreras
                    </MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      onClick={() =>
                        (window.location = `${this.state.urlDevlights}/#footer`)
                      }
                    >
                      Contacto
                    </MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        <div className="d-none d-md-inline">ES</div>
                      </MDBDropdownToggle>

                      <MDBDropdownMenu className="dropdown-default">
                        <MDBDropdownItem href="/nearshore">EN</MDBDropdownItem>
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
