import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { Link, BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    //<Router>
      <MDBNavbar color="purple" dark expand="md" >
        <MDBNavbarBrand >
          <strong className="white-text">Connected World 360</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem >
              <MDBNavLink to="/recargas">Recargar</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem >
              <MDBNavLink to="/pedidos">Pedidos</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem >
              <MDBNavLink to="/usuarios">Administrador</MDBNavLink>
            </MDBNavItem>

            {/* <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem> */}
          </MDBNavbarNav>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem><Link to="/login">Iniciar Session</Link></MDBDropdownItem>{/* <Link to='/login'> */}
                  <MDBDropdownItem><Link to="/cuenta">Cuenta</Link></MDBDropdownItem>{/* <Link to='/cuenta'> */}
                  <MDBDropdownItem><Link to="/#">Cerrar Sesion</Link></MDBDropdownItem>{/* <Link to='#!'> */}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    //</Router>
    );
  }
}

export default NavbarPage;