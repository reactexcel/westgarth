import React from "react";
import logo from "../../assets/png/logo.png";
import { Navbar, Nav } from "react-bootstrap";
function index() {
  return (
    <div className="header d-sm-flex align-items-end">
      <div className="logo col-md-2">
        <img src={logo} className="w-100"/>
      </div>
      <Navbar variant="light" className="col-md-10">
        <Nav className="w-100 overflow-auto">
          <Nav.Link className="col-sm-3 text-center dark-brown "href="#">DASHBOARD</Nav.Link>
          <Nav.Link className="col-sm-3 text-center brown-color "href="#">ACCOUNT INFORMATION</Nav.Link>
          <Nav.Link className="col-sm-3 text-center dark-brown "href="#">WINE COLLECTION</Nav.Link>
          <Nav.Link className="col-sm-3 text-center dark-brown "href="#">LIVE COLLECTION</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default index;
