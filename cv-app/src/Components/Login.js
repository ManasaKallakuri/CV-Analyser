import React,{Component} from "react"
import {Card,Button} from "react-bootstrap"

class Login extends Component{
    constructor(){
        super()

        this.state = {
            email: " ",
            password: " "
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
                <Card style = {{width: '18rem'}}>
               <Card.Body>
                   <Card.Title>
                       Welcome!
                   </Card.Title>
                   <form>
                   <input 
                    type = "email" 
                    value = {this.state.email} 
                    onChange = {this.handleChange}
                    placeholder = "Email"
                    name = "email"></input>
                   <br/>
                   <input 
                    type = "text" 
                    value = {this.state.password}
                    onChange = {this.handleChange} 
                    placeholder = "Password"
                    name = "password"></input>
                   <br/>
                   <br/>
                   <Button 
                    onSubmit ={this.handleSubmit}
                    type= "submit" 
                    variant="info">Sign in</Button>
                   </form>
                   <Card.Text>Don't have an account?
                       <a href = "">Sign Up</a>
                    </Card.Text>
               </Card.Body>
            </Card>
            
            
           
        );
    }
}

export default Login;