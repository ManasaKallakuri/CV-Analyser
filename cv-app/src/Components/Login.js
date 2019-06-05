import React,{Component} from "react"
import {Card,Button, Container, Row, Col, Form} from "react-bootstrap"

class Login extends Component{
    constructor(){
        super()

        this.state = {
            email: '',
            password: ''
        }
            this.handleChange = this.handleChange.bind(this)
        
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
        <div as= {Row}> <br/> <br/> <br/> <br/><br/><br/></div> 
        <Row className="justify-content-md-center">
        {/* <Col className = "align-item-center"> */}
    
        <Card style = {{width: '22rem'}} className="text-center">
                <Card.Body>
                   <Card.Title>
                       Welcome!
                   </Card.Title>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group as = {Row} controlId="formBasicEmail">
                        <Col>
                        <Form.Control name="email" value={this.state.email} onChange={this.handleChange} type="email" placeholder="Email ID" />
                        </Col>
                    </Form.Group>

                    <Form.Group as = {Row}>
                    <Col>
                    <Form.Control name="password" value={this.state.password} onChange={this.handleChange} type="password" placeholder="Password" />
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 5 }}>
                        <Button variant="primary "type="submit">Sign in</Button>
                        </Col>
                    </Form.Group>

                </Form>

                    <Card.Text className="text-align-centre">Don't have an account?
                       <a href = "">Sign Up</a>
                    </Card.Text>

               </Card.Body>
            </Card>

        
        </Row>
    </Container>     
        );
    }
}

export default Login;