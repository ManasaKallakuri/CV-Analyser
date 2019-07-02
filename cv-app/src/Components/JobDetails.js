import React from "react"
import {Card,Button,Container,Row,Col,Form} from "react-bootstrap"

class JobDetails extends React.Component{
    constructor(){
        super()

        this.state = {
            postedBy: '',
            title : '',
            role: '',
            description: '',
            type: '',
            stipend: '',
            ctc: '',
            location: '',
            workfromhome: '',
            cgpa: '',
            experience: '',
            tnt: '',
            aoe: '',
            languages: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name,value,type,checked} = event.target
        type == "checkbox" ? this.setState({[name] : checked}) : this.setState({[name] : value})
    }

    handleSubmit(event){
        event.preventDefault();
    }

    render(){
        return(
            <Container>
                <div as= {Row}> <br/> <br/> <br/> <br/><br/></div>
                <Row className="justify-content-md-center">
                <Card style = {{width: '32rem'}} >
                    <Card.Body>
                        <Card.Title className ="text-center">
                            Post a Job
                        </Card.Title>
                        <br/>
                        <Form onSubmit = {this.handleSubmit}>
                        <   Form.Group controlId="formpostedBy">
                                <Form.Label>Posted By</Form.Label>
                                <Form.Control 
                                    name="postedBy" 
                                    value={this.state.postedBy} 
                                    onChange={this.handleChange} 
                                    type="text" 
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formtitle">
                                <Form.Label>Job Title</Form.Label>
                                <Form.Control 
                                    name="title" 
                                    value={this.state.title} 
                                    onChange={this.handleChange} 
                                    type="text" 
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formrole">
                                <Form.Label>Role</Form.Label>
                                <Form.Control 
                                    name="role" 
                                    value={this.state.role} 
                                    onChange={this.handleChange} 
                                    type="text" 
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formdescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as= "textarea"
                                    name="description" 
                                    value={this.state.description} 
                                    onChange={this.handleChange} 
                                    type="text" 
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formType">
                                <Form.Label>Type</Form.Label> 
                                <Form.Check 
                                    type = "radio"
                                    name="type" 
                                    value="Internship"
                                    checked = {this.state.type === "Internship"}
                                    onChange={this.handleChange} 
                                    label = "Internship"
                                />
                                <Form.Check 
                                    type = "radio"
                                    name="type" 
                                    value="Job"
                                    checked = {this.state.type === "Job"}
                                    onChange={this.handleChange} 
                                    label = "Job"
                                />
                            </Form.Group>

                            <Form.Group controlId="formlocation">
                                <Form.Label>Location</Form.Label>
                                <Form.Control 
                                    name="location" 
                                    value={this.state.location} 
                                    onChange={this.handleChange} 
                                    type="text" 
                                    required
                                />
                            </Form.Group>

                            
                            <Form.Group controlId="formstipend">
                                <Form.Label>Stipend</Form.Label>
                                <Form.Control 
                                    name="stipend" 
                                    value={this.state.stipend} 
                                    onChange={this.handleChange} 
                                    type="number" 
                                />
                            </Form.Group>
                            
                            <Form.Group controlId="formctc">
                                <Form.Label>CTC</Form.Label>
                                <Form.Control 
                                    name="ctc" 
                                    value={this.state.ctc} 
                                    onChange={this.handleChange} 
                                    type="number" 
                                />
                            </Form.Group>

                            <Form.Group controlId="formworkfromhome">
                                 
                                <Form.Check 
                                    type = "checkbox"
                                    name="workfromhome" 
                                    value="workfromhome"
                                    checked = {this.state.workfromhome}
                                    onChange={this.handleChange} 
                                    label = "Work From Home"
                                />
                            </Form.Group>

                            <Form.Group controlId="formcgpa">
                                <Form.Label>CGPA</Form.Label>
                                <Form.Control 
                                    name="cgpa" 
                                    value={this.state.cgpa} 
                                    onChange={this.handleChange} 
                                    type="number" 
                                />
                            </Form.Group>

                            <Form.Group controlId="formexperience">
                                <Form.Label>Experience(In years)</Form.Label>
                                <Form.Control 
                                    name="experience" 
                                    value={this.state.experience} 
                                    onChange={this.handleChange} 
                                    type="number" 
                                />
                            </Form.Group>

                            <Form.Group controlId="formtnt">
                                <Form.Label>Tools and Technologies</Form.Label>
                                <Form.Control 
                                    name="tnt" 
                                    value={this.state.tnt} 
                                    onChange={this.handleChange} 
                                    type="text" 
                                />
                            </Form.Group>

                            <Form.Group controlId="formaoe">
                                <Form.Label>Area of Expertise</Form.Label>
                                <Form.Control 
                                    name="aoe" 
                                    value={this.state.aoe} 
                                    onChange={this.handleChange} 
                                    type="text" 
                                />
                            </Form.Group>

                            <Form.Group controlId="formlanguages">
                                <Form.Label>Programming Languages</Form.Label>
                                <Form.Control 
                                    name="languages" 
                                    value={this.state.languages} 
                                    onChange={this.handleChange} 
                                    type="text" 
                                />
                            </Form.Group>

                            <Form.Group>
                                <Col sm={{ span: 10, offset: 9}}>
                                <Button variant="primary" type="submit">Submit</Button>
                                </Col>
                            </Form.Group>

                        </Form>
                    </Card.Body>
                </Card>
                </Row>
            </Container>
        )
    }
}

export default JobDetails