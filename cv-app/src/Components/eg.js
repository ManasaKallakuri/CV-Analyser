import React,{Component} from "react"
import{Card,Button,Form,Container,Row,Col} from "react-bootstrap"

class Profile extends Component{
    constructor(){
        super()

        this.state = {
            name: '',
            email: '',
            location: '',
            contactnumber: '',
            skype: '',
            github: '',
            codeforces: '',
            codechef: '',
            hackerrank: ''
        }
        this.handleChange = this.handleChange.bind(this);

    }


handleChange = event =>{
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

handleSubmit = event =>{
    event.preventDefault();
}


render(){
    return(
        <Container>
        
        <Card style = {{width: '22rem'}} className="text-center">
            <Card.Body>
                <Card.Title>
                    Manage Profile
                </Card.Title>
                <Form onsubmit={this.handleSubmit}>
                    <Form.Group as = {Row} controlId="formName">
                        <Col>
                        <Form.Control name="name" value={this.state.name} onChange={this.handleChange} type="text" placeholder="Name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as = {Row} controlId="formBasicEmail">
                        <Col>
                        <Form.Control name="email" value={this.state.email} onChange={this.handleChange} type="email" placeholder="Email ID" />
                        </Col>
                    </Form.Group>

                    <Form.Group as = {Row} controlId="formLocation">
                        <Col>
                        <Form.Control name="location" value={this.state.location} onChange={this.handleChange} type="text" placeholder="Location" />
                        </Col>
                    </Form.Group>

                    <Form.Group as = {Row} controlId="formContactNumber">
                        <Col>
                        <Form.Control name="contactnumber" value={this.state.contactnumber} onChange={this.handleChange} type="number" placeholder="Contact Number" />
                        </Col>
                    </Form.Group>

                    <Form.Group as = {Row} controlId="formskype">
                        <Col>
                        <Form.Control name="skype" value={this.state.skype} onChange={this.handleChange} type="text" placeholder="Skype Profile" />
                        </Col>
                    </Form.Group>

                    <Form.Group as = {Row} controlId="formgithub">
                        <Col>
                        <Form.Control name="skype" value={this.state.github} onChange={this.handleChange} type="text" placeholder="GitHub Profile" />
                        </Col>
                    </Form.Group>

                </Form>


       
        
      
                <Card.Title>
                    Programming Profiles
                </Card.Title>
                <Form onsubmit = {this.handleSubmit}>

                <Form.Group controlId="formcodeforces">
                    <Form.Label>Codeforces Profile</Form.Label>
                    <Form.Control name="codeforces" value={this.state.codeforces} onChange={this.handleChange} type="text"/>
                </Form.Group>

                <Form.Group controlId="formcodechef">
                    <Form.Label>CodeChef Profile</Form.Label>
                    <Form.Control name="codechef" value={this.state.codechef} onChange={this.handleChange} type="text"/>
                </Form.Group>

                <Form.Group controlId="formhackerrank">
                    <Form.Label>HackerRank Profile</Form.Label>
                    <Form.Control name="hackerrank" value={this.state.codechef} onChange={this.handleChange} type="text"/>
                </Form.Group>
                
                </Form>

                <div>
                    <input type="file" name="file" onChange={(e) =>this.onChange(e)} />
                </div>

            </Card.Body>
        </Card>


    </Container>
    );
}

}

export default Profile;