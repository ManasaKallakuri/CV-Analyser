import React from "react"
import {Card,Button,Container,Row,Col,Form} from "react-bootstrap"


class CompanyDetails extends React.Component{
    constructor(){
        super()

        this.state= {
            name: '',
            website: '',
            industry: '',
            companySize: '',
            headquarters: '',
            type: '',
            founded: '',
            Specialities:'',
            username: '',
            jobs: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name,value} = event.target
        this.setState({
            [name] : value
        })
    }

    

    render(){
        return(
            <Container>
            <div as= {Row}> <br/> <br/> <br/> <br/><br/></div> 
            <Row className="justify-content-md-center">
            <Card style = {{width: '32rem'}} >
                <Card.Body>

                <Card.Title className="text-center">
                    Company Details
                </Card.Title>
                <br/>
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label > Company </Form.Label>
                        <Form.Control 
                            name="name" 
                            value={this.state.name} 
                            onChange={this.handleChange} 
                            type="text" 
                            placeholder="Company" 
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formCompUser">
                        <Form.Label > Username </Form.Label>
                        <Form.Control 
                            name="username" 
                            value={this.state.username} 
                            onChange={this.handleChange} 
                            type="text" 
                            placeholder="Email ID" 
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formWebsite">
                        <Form.Label>Company Website</Form.Label> 
                        <Form.Control 
                            name="website" 
                            value={this.state.website} 
                            onChange={this.handleChange} 
                            type="text" 
                            placeholder="http://www.yourCompany.com" 
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formIndustry">
                        <Form.Label>Type of Industry</Form.Label> 
                        <Form.Control 
                            name="industry" 
                            value={this.state.industry} 
                            onChange={this.handleChange} 
                            type="text" 
                            placeholder="For e.g IT" 
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formHeadquaters">
                        <Form.Label>Headquaters</Form.Label> 
                        <Form.Control 
                            name="headquaters" 
                            value={this.state.headquaters} 
                            onChange={this.handleChange} 
                            type="text" 
                            placeholder="Headquaters" 
                            required
                        />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as = {Col} controlId="formCompSize">
                            <Form.Label>Size of Company</Form.Label> 
                            <Form.Control 
                                name="companySize" 
                                value={this.state.companySize} 
                                onChange={this.handleChange} 
                                type="number" 
                                placeholder="1000" 
                                required
                            />
                        </Form.Group>
                        <Form.Group as = {Col} controlId="formFounded">
                            <Form.Label>Founded In</Form.Label> 
                            <Form.Control 
                                name="founded" 
                                value={this.state.founded} 
                                onChange={this.handleChange} 
                                type="number" 
                                placeholder="Year" 
                                required
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formType">
                        <Form.Label>Type</Form.Label> 
                        <Form.Check 
                            type = "radio"
                            name="type" 
                            value="Public"
                            checked = {this.state.type === "Public"}
                            onChange={this.handleChange} 
                            label = "Public"
                        />
                        <Form.Check 
                            type = "radio"
                            name="type" 
                            value="Private"
                            checked = {this.state.type === "Private"}
                            onChange={this.handleChange} 
                            label = "Private"
                        />
                    </Form.Group>

                    

                </Form>

                </Card.Body>
            </Card>

            </Row>
            </Container>

        );
    }
}

export default CompanyDetails
