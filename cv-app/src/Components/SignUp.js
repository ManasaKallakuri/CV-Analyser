import React,{Component} from "react"
import {Card,Button} from "react-bootstrap"

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
        let cardstyle = {
            width : '20rem',
            margin: 0 ,
            marginBottom: '10px',
    
        }

        return(
            <Card style = {cardstyle} class = "float-none">
                <Card.Body>
                    <form>
                        <input 
                            type = "text"
                            name = "firstname"
                            placeholder = "FirstName"
                            onChange = {this.handleChange}
                            value = {this.state.firstname}>
                        </input>

                        <input 
                            type = "text"
                            name = "lastname"
                            placeholder = "LastName"
                            onChange = {this.handleChange}
                            value = {this.state.Lastname}>
                        </input>

                        <input 
                            type = "email"
                            name = "email"
                            placeholder = "Email"
                            onChange = {this.handleChange}
                            value = {this.state.email}>
                        </input>

                        <input 
                            type = "text"
                            name = "password"
                            placeholder = "Password"
                            onChange = {this.handleChange}
                            value = {this.state.password}>
                        </input>

                        <input 
                            type = "text"
                            name = "confirmpassword"
                            placeholder = "ConfirmPassword"
                            onChange = {this.handleChange}
                            value = {this.state.confirmpassword}>
                        </input>
                        <br/>
                        <br/>

                        <Button 
                            onSubmit ={this.handleSubmit}
                            type= "submit" 
                            variant="info">Sign Up</Button>

                        <br/>
                        <br/>
                        <div class="g-signin2" data-width="210" data-height="50" data-longtitle="true"></div>

                    </form>
                </Card.Body>
            </Card>


        );
    }
}

export default SignUp