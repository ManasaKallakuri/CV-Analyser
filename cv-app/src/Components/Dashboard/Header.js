import React from "react"
//import ReactDOM from "react-dom"
import {Navbar,Form,Button,Nav,FormControl,NavDropdown} from "react-bootstrap"


class Header extends React.Component{
    constructor(){
        super()

        this.state = {
            username: ''
        }

        this.handleClick = this.handleClick.bind(this)
        this.hydrateStateWithLocalStorage = this.hydrateStateWithLocalStorage.bind(this)
    }

    hydrateStateWithLocalStorage() {
        // for all items in state
        for (let key in this.state) {
          // if the key exists in localStorage
          console.log(key)
          if (localStorage.hasOwnProperty(key)) {
            // get the key's value from localStorage
            let value = localStorage.getItem(key);
            console.log(value)
            // parse the localStorage string and setState
            try {
              value = JSON.parse(value);
              this.setState({ [key]: value });
              console.log(this.state.username)
            } catch (e) {
              // handle empty string
              this.setState({ [key]: value });
            }
          }
        }
    }

    componentDidMount(){
        this.hydrateStateWithLocalStorage();
        //console.log(this.state.username)
    }

    handleClick(event){
        event.preventDefault();
        fetch('/logout', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            if(result.success === true){
                this.props.history.push("/login")
            }
            else{
                alert("Unable to logout!")
            }
        })

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
                    <NavDropdown title={this.state.username} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Manage Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Manage Jobs</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" onClick = {this.handleClick}>Logout</NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                
                </Nav>
                
            </Navbar>
        )
    }
}

export default Header