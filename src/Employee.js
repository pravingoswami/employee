import React from 'react'
import { Jumbotron, Button, Container,  Form, FormGroup, Label, Input, FormText  } from 'reactstrap';
import FormDesign from './FromDesign';

class Employee extends React.Component{

    constructor(){
        super()
        
    }

    headerStyle = {
        textAlign : "center"
    }

    render(){
        return(
            <div>
                <Container>
                <br></br>
                <h1 className="display-3" style = {this.headerStyle} ><strong>Employee Data</strong></h1>
                <br></br>

                <Jumbotron>
                    <FormDesign />
                </Jumbotron>
                <br></br>
                    <Button color = "primary">Add Employee</Button>
                </Container>
            </div> 
        )
    }
}

export default Employee