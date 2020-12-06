import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";

export default function MyNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="navbar1">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">BidVendor</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Documentation</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/Tarunvir/BidVendor">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Buy or Sell
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to={"/createproduct"}>
                    <DropdownItem>Create an Ad</DropdownItem>
                  </Link>
                  <DropdownItem>Browse new items</DropdownItem>
                  {/* <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Link to={"/login"}>
              <NavbarText>Login</NavbarText>
            </Link>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}
