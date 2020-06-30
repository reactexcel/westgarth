import React from "react";
import logo from "../../assets/png/logo.png";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";
function index(props) {
  const { pathname } = props.location;

  return (
    <div className="header d-sm-flex align-items-end row">
      <div className="logo col-md-2">
        <img src={logo} />
      </div>
      <Navbar variant="light" className="col-md-10" expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 overflow-auto">
            <Nav.Link className={`col-md-3 text-center dark-brown`} href="#">
              DASHBOARD
            </Nav.Link>
            <Nav.Link
              className={`col-md-3 text-center ${
                pathname == "/" ? "brown-color" : "dark-brown"
              }`}
              href="/"
            >
              ACCOUNT INFORMATION
            </Nav.Link>
            <Nav.Link
              className={`col-md-3 text-center ${
                pathname == "/collection" ? "brown-color" : "dark-brown"
              }`}
              href="/collection"
            >
              WINE COLLECTION
            </Nav.Link>
            <Nav.Link className="col-md-3 text-center dark-brown " href="#">
              LIVE COLLECTION
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(index);
