import React from 'react';
import { Badge, Container, Dropdown, Form, FormControl, Nav, Navbar, NavDropdown, } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';


const Header = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark" style={{ height: 80 }}>
				<Container >
					<Navbar.Brand href="#">Navbar scroll</Navbar.Brand>

					<Navbar.Text>
						<Form className="d-flex">
							<FormControl
								style={{ width: 500 }}
								type="search"
								placeholder="Search a product..."
								className="m-auto"
								aria-label="Search"
							/>
						</Form>
					</Navbar.Text>
					<Nav>
						<Dropdown alignRight>
							<Dropdown.Toggle variant="success">
								<FaShoppingCart color='white' fontSize='25px' />
								<Badge>10</Badge>
							</Dropdown.Toggle>
							<Dropdown.Menu style={{ minWidth: 370 }}>
								<span style={{ padding: 10 }}>Cart is Empty!
								</span>
							</Dropdown.Menu>
						</Dropdown>
					</Nav>
				</Container>
			</Navbar>
		</>
	)
}

export default Header
