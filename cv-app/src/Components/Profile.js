import React,{Component} from "react"
import {Card,Form,Button,Row,Col,Container} from "react-bootstrap"


class Profile extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            location: '',
            contactnumber: '',
            linkedin: '',
            skype: '',
            github: '',
            codeforces: '',
            codechef: '',
            hackerrank: ''
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

    setInterest = event =>{
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        );
    }

    setOccupation = event =>{
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        );
    }

    

    onChange(e) {
        let files = e.target.files;
        console.warn("data file" , files);
    }
    


    render(){
        return(
            <Container>
            <div as= {Row}> <br/> <br/><br/></div> 
            <Row className="justify-content-md-left">
            
            <Card style = {{width: '42rem'}}>
                <Card.Body>
                    <Card.Title>
                        Create Profile
                    </Card.Title>

                    <Form>
                    <Form.Group as = {Row} controlId="formName">
                        <Col>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" value={this.state.name} onChange={this.handleChange} type="text"/>
                        </Col>
                    </Form.Group>
                        
                    <Form.Group as = {Row} controlId="formBasicEmail">
                        <Col>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" value={this.state.email} onChange={this.handleChange} type="email"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as = {Row} controlId="formcontact">
                        <Col>
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control name="contactnumber" value={this.state.contactnumber} onChange={this.handleChange} type="number"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as = {Row} controlId="formlocation">
                        <Col>
                        <Form.Label>Location</Form.Label>
                        <Form.Control name="location" value={this.state.location} onChange={this.handleChange} type="text"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as = {Row} controlId="formlinkedin">
                        <Col>
                        <Form.Label>LinkedIn ID</Form.Label>
                        <Form.Control name="linkedin" value={this.state.linkedin} onChange={this.handleChange} type="text"/>
                        </Col>
                    </Form.Group>


                    <Form.Group as = {Row} controlId="formskype">
                        <Col>
                        <Form.Label>Skype Profile</Form.Label>
                        <Form.Control name="skype" value={this.state.skype} onChange={this.handleChange} type="text"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as = {Row} controlId="formgithub">
                        <Col>
                        <Form.Label>GitHub Profile</Form.Label>
                        <Form.Control name="github" value={this.state.github} onChange={this.handleChange} type="text"/>
                        </Col>
                    </Form.Group>
                    
                    </Form>
                    <br/>
                    <br/>

                    <Card.Title>
                        Programming Profiles
                    </Card.Title>

                    <Form>
                        
                        <Form.Group as = {Row} controlId="formcodeforces">
                            <Col>
                            <Form.Label>Codeforces Profile</Form.Label>
                            <Form.Control name="codeforces" value={this.state.codeforces} onChange={this.handleChange} type="text"/>
                            </Col>
                        </Form.Group>

                        <Form.Group as = {Row} controlId="formcodechef">
                            <Col>
                            <Form.Label>CodeChef Profile</Form.Label>
                            <Form.Control name="codechef" value={this.state.codechef} onChange={this.handleChange} type="text"/>
                            </Col>
                        </Form.Group>

                        <Form.Group as = {Row} controlId="formhackerrank">
                            <Col>
                            <Form.Label>Hackerrank Profile</Form.Label>
                            <Form.Control name="hackerrank" value={this.state.hackerrank} onChange={this.handleChange} type="text"/>
                            </Col>
                        </Form.Group>

                        
                       `<div onChange = {this.setOccupation.bind(this)}>
                           <p>Occupation</p>
                           <input type="radio" value = "Student" name = "occupation"/>Student
                           <br/>
                           <input type="radio" value = "Employed" name = "occupation"/>Employed
                           <br/>
                           <input type="radio" value = "Unemployed" name = "occupation"/>Unemployed
                        </div>

                        `<div onChange = {this.setInterest.bind(this)}>
                           <p>Full time Oppurtunity or Internship?</p>
                           <input type="radio" value = "Internship" name = "interest"/>Internship
                           <br/>
                           <input type="radio" value = "Job" name = "interest"/>Job
                        </div>
                       
                        <div>
                            <br/>
                            <p>Upload Resume</p>
                            {/* <Button variant="primary" onChange={(e) =>this.onChange(e)}>Choose File</Button> */}
                            <input type="file" name="file" onChange={(e) =>this.onChange(e)} />
                        </div>

                        <Form.Group as={Row}>
                            <Col sm={{ span: 20, offset: 10 }}>
                            <Button variant="primary" type="submit">Update</Button>
                            </Col>
                        </Form.Group>


                    </Form>
                    
                   

                </Card.Body>
            </Card>
           
        </Row>
        </Container>
        );
    }
}


export default Profile
