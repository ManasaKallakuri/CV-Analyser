import React from "react"
import ReactDOM from "react-dom"
import {Navbar,Form,Button,Nav,FormControl,NavDropdown} from "react-bootstrap"


class Header extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Hire Me</Navbar.Brand>
                <Form inline className="mx-auto">
                    <FormControl type="text" placeholder="Search" className="mr-sm-3" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Post a Job</Nav.Link>
                    <NavDropdown title="Username" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Manage Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Manage Jobs</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                
                </Nav>
                
            </Navbar>
        )
    }
}

export default Header