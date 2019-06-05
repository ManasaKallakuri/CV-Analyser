import React,{Component} from "react"
import {Card,Button,Container,Row,Col,Form} from "react-bootstrap"

class SignUp extends Component{
    constructor(){
        super()

        this.state = {
            firstname: " ",
            lastname: " ",
            email: " ",
            password: " ",
            confirmpassword: " ",
        }
    }

    handleChange = event =>{
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        );
    }

    handleSubmit = event =>{
        event.preventDefault();
    }

   
    render(){
        return(
            <Container>
            <Row className="justify-content-md-center">
            <Card style = {{width: '22rem', height: '18rem'}}>
                <Card.Body>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group as = {Row} controlId="formFirstName">
                        <Col>
                        <Form.Control name="firstname" value={this.state.firstname} onChange={this.handleChange} type="text" placeholder="FirstName" />
                        </Col>
                    </Form.Group>

                    <Form.Group as = {Row} controlId="formLastName">
                        <Col>
                        <Form.Control name="lastname" value={this.state.lastname} onChange={this.handleChange} type="text" placeholder="LastName" />
                        </Col>
                    </Form.Group>

                    <Form.Group as = {Row} controlId="formBasicEmail">
                        <Col>
                        <Form.Control name="email" value={this.state.email} onChange={this.handleChange} type="email" placeholder="Enter Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as = {Row} controlId="formBasicPassword">
                    <Col>
                    <Form.Control name="password" value={this.state.password} onChange={this.handleChange}type="password" placeholder="Password" />
                    </Col>
                    </Form.Group>

                    <Form.Group as = {Row} controlId="formConfirmPassword">
                    <Col>
                    <Form.Control name="confirmpassword" value={this.state.confirmpassword} onChange={this.handleChange}type="password" placeholder="Confirm Password" />
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 5 }}>
                        <Button variant="primary "type="submit">Sign Up</Button>
                        </Col>
                    </Form.Group>

                </Form>

                    <Card.Text>Have an account?
                       <a href = "">Sign In</a>
                    </Card.Text>

                </Card.Body>
            </Card>

            </Row>
            </Container>


        );
    }
}

export default SignUp