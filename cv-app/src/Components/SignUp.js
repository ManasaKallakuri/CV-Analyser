import React,{Component} from "react"
import {Card,Button,Container,Row,Col,Form} from "react-bootstrap"
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'


class SignUp extends Component{
    constructor(){
        super()

        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            confirmpassword: '',
            profileType: ''
        }
    }

    ValidateForm(){
        return(
            this.state.username.length>0 &&
            this.state.password.length>0 &&
            this.state.password === this.state.confirmpassword
        );
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
        fetch('/signup', {
            method: "POST",
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(this.state)
        })
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
        })

    }

   
    render(){
        return(
            <Container>
            <div as= {Row}> <br/> <br/> <br/> <br/><br/><br/></div> 
            <Row className="justify-content-md-center">
            <Card style = {{width: '22rem'}} className="text-center">
                <Card.Body>
                <Card.Title>
                    Sign Up
                </Card.Title>
                <br/>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group as = {Row} controlId="formFirstName">
                        <Col>
                        <Form.Control name="firstName" value={this.state.firstName} onChange={this.handleChange} type="text" placeholder="FirstName" />
                        </Col>
                    </Form.Group>

                    <Form.Group as = {Row} controlId="formLastName">
                        <Col>
                        <Form.Control name="lastName" value={this.state.lastName} onChange={this.handleChange} type="text" placeholder="LastName" />
                        </Col>
                    </Form.Group>

                    <Form.Group as = {Row} controlId="formBasicEmail">
                        <Col>
                        <Form.Control name="username" value={this.state.username} onChange={this.handleChange} type="email" placeholder="Email ID" />
                        </Col>
                    </Form.Group>

                    <Form.Group as = {Row} controlId="formBasicPassword">
                    <Col>
                    <Form.Control name="password" value={this.state.password} onChange={this.handleChange} type="password" placeholder="Password" />
                    </Col>
                    </Form.Group>

                    <Form.Group as = {Row} controlId="formConfirmPassword">
                    <Col>
                    <Form.Control name="confirmpassword" value={this.state.confirmpassword} onChange={this.handleChange} type="password" placeholder="Confirm Password" />
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 5 }}>
                    <Form.Check type="radio" name="profileType" value="Applicant" checked={this.state.profileType == "Applicant"} onChange = {this.handleChange} label="Applicant"/>
                    <Form.Check type="radio" name="profileType" value="Company" checked={this.state.profileType == "Company"} onChange = {this.handleChange} label="Company"/>
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col>
                        <Button variant="primary" type="submit" disabled={!this.ValidateForm()} >Sign Up</Button>
                        </Col>

                    </Form.Group>

                   

                </Form>

                    <Card.Text>Have an account?
                       <a href = "/login">Sign In</a>
                    </Card.Text>

                </Card.Body>
            </Card>

            </Row>
            </Container>


        );
    }
}

export default SignUp