// This file adds a navbar component.

// Import React and React Component:
import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav} from 'react-bootstrap';

	class NavBarHeader extends Component {
		// The render() chunk is our component:
		render() {
			return (
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#">Bucket List</a>
						</Navbar.Brand>
					</Navbar.Header>

					<Nav>
						<NavItem eventKey={1} href="#">Sign In</NavItem>
						<NavItem eventKey={2} href="#">Sign Up</NavItem>
						<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
							<MenuItem eventKey={3.1}>Goal 1</MenuItem>
							<MenuItem eventKey={3.2}>Goal 2</MenuItem>
							<MenuItem eventKey={3.3}>Goal 3</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={3.3}>More Goals</MenuItem>
						</NavDropdown>
					</Nav>
				</Navbar>
			);
		}
	}

// Export the component:
export default NavBarHeader;



















































