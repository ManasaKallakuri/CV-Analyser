import React,{Component} from "react"
import {Card,Form,Button,Row,Col,Container} from "react-bootstrap"
import axios from 'axios'


class Profile extends Component{
    constructor(){
        super()
        this.state = {
<<<<<<< HEAD
            fullName: '',
            email: '',
            location: '',
            mobileNumber: '',
            linkedinID: '',
            skypeID: '',
            githubID: '',
            codeForces: '',
            codeChef: '',
            hackerRank: ''
=======

            username: '',
            fullName: '',
            mobileNumber: '',
            location: '',
            skypeID: '',
            githubID: '',
            linkedinID: '',
            codeForces: '',
            codeChef: '',
            hackerRank: '',
            occupation: '',
            type: '',
            resume: null
>>>>>>> master
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.hydrateStateWithLocalStorage = this.hydrateStateWithLocalStorage.bind(this)
    }

    hydrateStateWithLocalStorage() {
        // for all items in state
        for (let key in this.state) {
          // if the key exists in localStorage
         // console.log(key)
          if (localStorage.hasOwnProperty(key)) {
            // get the key's value from localStorage
            let value = localStorage.getItem(key);
            //console.log(value)
            // parse the localStorage string and setState
            try {
              value = JSON.parse(value);
              this.setState({ [key]: value });
              //console.log(this.state.username)
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

    handleChange(event){
        const {name,value} = event.target
        this.setState({
            [name] : value
        })
    }

    onChange(event) {
        //let files = event.target.files[0];
        //console.warn("data file" , files);
        this.setState({
            resume: event.target.files[0]
            //loaded: 0,
        })
    }

    handleSubmit(event){
        event.preventDefault();
        const data = new FormData()
        // this.setState({
        //     resume: {
        //         name: this.state.username + '.pdf'
        //     }
        // })
        data.append('file', this.state.resume, this.state.username + '.pdf')
        console.log(this.state.resume)
        //data.append('body', this.state)
        axios.post('/applicant/upload', data)
        .then(res => {
            console.log(res)
            if(res.success === true){
                fetch('/applicant/edit', {
                        method: "POST",
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(this.state)
                        //user: JSON.stringify(this.state.username)
                    })
                    .then((response) => response.json())
                    .then((result) => {
                        console.log(result.message)
                        // if(result.success === true){
                        //     this.props.history.push("/dashboard")
                        // }
                        // else{
                        //     alert(result.err)
                        // }
                    })
            }
            else{
                alert(res.err)
            }
        })
        // console.log(this.state.resume)
        // const file={}
        // file.append('file',this.state.resume)
        // event.preventDefault();
        // fetch('/applicant/edit', {
        //     method: "POST",
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify(this.state),
        //     file
        //     user: JSON.stringify(this.state.username)
        // })
        // .then((response) => response.json())
        // .then((result) => {
        //     console.log(result)
        //     if(result.success === true){
        //         this.props.history.push("/dashboard")
        //     }
        //     else{
        //         alert(result.err)
        //     }
        // })
    }
    
    render(){
        return(
            <Container>
            <div as= {Row}> <br/> <br/> <br/> <br/><br/></div> 
            <Row className="justify-content-md-center">
            <Card style = {{width: '32rem'}} >
                <Card.Body>
<<<<<<< HEAD
                    <Card.Title>
                        Create Profile
                    </Card.Title>

                    <Form>
                    <Form.Group as = {Row} controlId="formName">
                        <Col>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="fullName" value={this.state.fullName} onChange={this.handleChange} type="text"/>
                        </Col>
=======

                <Card.Title className="text-center">
                    Applicant Details
                </Card.Title>
                <br/>
                <Form onSubmit={this.handleSubmit}>

                    <Form.Group controlId="formName">
                        <Form.Label > Name </Form.Label>
                        <Form.Control 
                            name="fullName" 
                            value={this.state.fullName} 
                            onChange={this.handleChange} 
                            type="text" 
                            //placeholder="Name" 
                            required
                        />
>>>>>>> master
                    </Form.Group>

                    <Form.Group controlId="formPlaintextEmail">
                        <Form.Label>
                        Username
                        </Form.Label>
                        <Form.Control readOnly 
                        defaultValue={this.state.username} />
                    </Form.Group>

<<<<<<< HEAD
                    <Form.Group as = {Row} controlId="formcontact">
                        <Col>
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control name="mobileNumber" value={this.state.mobileNumber} onChange={this.handleChange} type="number"/>
                        </Col>
=======
                    <Form.Row>
                        <Form.Group as = {Col} controlId="formMobile">
                            <Form.Label>Contact</Form.Label> 
                            <Form.Control 
                                name="mobileNumber" 
                                value={this.state.mobileNumber} 
                                onChange={this.handleChange} 
                                type="number" 
                                //placeholder="" 
                                required
                            />
                        </Form.Group>

                        <Form.Group as= {Col} controlId="formLocation">
                            <Form.Label>Location</Form.Label> 
                            <Form.Control 
                                name="location" 
                                value={this.state.location} 
                                onChange={this.handleChange} 
                                type="text" 
                                //placeholder="For e.g IT" 
                                required
                            />
                        </Form.Group>
                    </Form.Row>
                    

                    <Form.Group controlId="formSkype">
                        <Form.Label>Skype ID</Form.Label> 
                        <Form.Control 
                            name="skypeID" 
                            value={this.state.skypeID} 
                            onChange={this.handleChange} 
                            type="text" 
                            //placeholder="Headquaters" 
                            //required
                        />
>>>>>>> master
                    </Form.Group>

                    <Form.Group controlId="formGithub">
                        <Form.Label>Github ID</Form.Label> 
                        <Form.Control 
                            name="githubID" 
                            value={this.state.githubID} 
                            onChange={this.handleChange} 
                            type="text" 
                            //placeholder="Headquaters" 
                            //required
                        />
                    </Form.Group>

<<<<<<< HEAD
                    <Form.Group as = {Row} controlId="formlinkedin">
                        <Col>
                        <Form.Label>LinkedIn ID</Form.Label>
                        <Form.Control name="linkedinID" value={this.state.linkedinID} onChange={this.handleChange} type="text"/>
                        </Col>
=======
                    <Form.Group controlId="formLinkedin">
                        <Form.Label>LinkedIn ID</Form.Label> 
                        <Form.Control 
                            name="linkedinID" 
                            value={this.state.linkedinID} 
                            onChange={this.handleChange} 
                            type="text" 
                            //placeholder="Headquaters" 
                            //required
                        />
>>>>>>> master
                    </Form.Group>

                    <Form.Row>
                        {/* <Form.Group as = {Col} controlId="formOccupation"> */}

<<<<<<< HEAD
                    <Form.Group as = {Row} controlId="formskype">
                        <Col>
                        <Form.Label>Skype Profile</Form.Label>
                        <Form.Control name="skypeID" value={this.state.skypeID} onChange={this.handleChange} type="text"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as = {Row} controlId="formgithub">
                        <Col>
                        <Form.Label>GitHub Profile</Form.Label>
                        <Form.Control name="githubID" value={this.state.githubID} onChange={this.handleChange} type="text"/>
                        </Col>
                    </Form.Group>
                    
                    </Form>
=======
                        <Form.Group as = {Col} controlId="formOccupation">
                            <Form.Label>Occupation</Form.Label>
                            <Form.Control as="select"
                                value = {this.state.occupation}
                                onChange = {this.handleChange}
                                name = "occupation"
                            >
                            <option value="student">Student</option>
                            <option value="employed">Employed</option>
                            <option value="unemployed">Unemployed</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as = {Col} controlId="formType">
                            <Form.Label>Interested In...</Form.Label>
                            <Form.Control as="select"
                                value = {this.state.type}
                                onChange = {this.handleChange}
                                name = "type"
                            >
                            <option value="internship">Internship</option>
                            <option value="job">Job</option>
                            </Form.Control>
                        </Form.Group>

                            {/* <Form.Label>Occupation</Form.Label> 
                            <Form.Check 
                                type = "radio"
                                name="occupation" 
                                value="Student"
                                checked = {this.state.occupation === "Student"}
                                onChange={this.handleChange} 
                                label = "Student"
                            />
                            <Form.Check 
                                type = "radio"
                                name="occupation" 
                                value="Employed"
                                checked = {this.state.occupation === "Employed"}
                                onChange={this.handleChange} 
                                label = "Employed"
                            />
                            <Form.Check 
                                type = "radio"
                                name="occupation" 
                                value="Unemployed"
                                checked = {this.state.occupation === "Unemployed"}
                                onChange={this.handleChange} 
                                label = "Unemployed"
                            />
                        </Form.Group> */}

                        {/* <Form.Group as = {Col} controlId="formJob">
                            <Form.Label>Full Time Opportunity or Internship?</Form.Label> 
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
                            </Form.Group> */}
                        </Form.Row>

>>>>>>> master
                    <br/>
                    <h6><b>Programming Profiles</b></h6>
                    <br/>

<<<<<<< HEAD
                    <Card.Title>
                        Programming Profiles
                    </Card.Title>

                    <Form>
                        
                        <Form.Group as = {Row} controlId="formcodeforces">
                            <Col>
                            <Form.Label>Codeforces Profile</Form.Label>
                            <Form.Control name="codeForces" value={this.state.codeForces} onChange={this.handleChange} type="text"/>
                            </Col>
                        </Form.Group>

                        <Form.Group as = {Row} controlId="formcodechef">
                            <Col>
                            <Form.Label>CodeChef Profile</Form.Label>
                            <Form.Control name="codeChef" value={this.state.codeChef} onChange={this.handleChange} type="text"/>
                            </Col>
                        </Form.Group>

                        <Form.Group as = {Row} controlId="formhackerrank">
                            <Col>
                            <Form.Label>Hackerrank Profile</Form.Label>
                            <Form.Control name="hackerRank" value={this.state.hackerRank} onChange={this.handleChange} type="text"/>
                            </Col>
                        </Form.Group>

                        
                        <div onChange = {this.setOccupation.bind(this)}>
                           <p>Occupation</p>
                           <input type="radio" value = "Student" name = "occupation"/>Student
                           <br/>
                           <input type="radio" value = "Employed" name = "occupation"/>Employed
                           <br/>
                           <input type="radio" value = "Unemployed" name = "occupation"/>Unemployed
                        </div>

                        <div onChange = {this.setInterest.bind(this)}>
                            <br/>
                           <p>Full time Oppurtunity or Internship?</p>
                           <input type="radio" value = "Internship" name = "interest"/>Internship
                           <br/>
                           <input type="radio" value = "Job" name = "interest"/>Job
                        </div>
                       
                        <div>
                            <br/>
                            <p>Upload Resume</p>
=======
                    <Form.Group controlId="formCodeforces">
                        <Form.Label>Codeforces Profile</Form.Label> 
                        <Form.Control 
                            name="codeForces" 
                            value={this.state.codeForces} 
                            onChange={this.handleChange} 
                            type="text" 
                            //placeholder="Headquaters" 
                            //required
                        />
                    </Form.Group>

                    <Form.Group controlId="formCodechef">
                        <Form.Label>Codechef Profile</Form.Label> 
                        <Form.Control 
                            name="codeChef" 
                            value={this.state.codeChef} 
                            onChange={this.handleChange} 
                            type="text" 
                            //placeholder="Headquaters" 
                            //required
                        />
                    </Form.Group>

                    <Form.Group controlId="formHackerrank">
                        <Form.Label>Hackerrank Profile</Form.Label> 
                        <Form.Control 
                            name="hackerRank" 
                            value={this.state.hackerRank} 
                            onChange={this.handleChange} 
                            type="text" 
                            //placeholder="Headquaters" 
                            //required
                        />
                    </Form.Group>

                    <div>
                        <br/>
                            <p><b>Upload Resume</b></p>
>>>>>>> master
                            {/* <Button variant="primary" onChange={(e) =>this.onChange(e)}>Choose File</Button> */}
                            <input type="file" name="resume" onChange={(e) =>this.onChange(e)} required />
                    </div>

                    <Form.Group>
                        <Col sm={{ span: 10, offset: 9}}>
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
