import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap'


function ContactDetail(props){

    return(
        <div>
            {
                props.skills.map((skill, i) => {
                    return (
                        <React.Fragment>
                             <Row key = {i} >
                                   <Col md = "10">
                                   <Input type="text" name="skills" id="skills" onChange = {(e) => this.handleSkills(e, i)} placeholder="Enter Your Skills." />
                                   <br></br>
                                   </Col>
                                   <Col md = "2">
                                   {
                                       i === 0 ? <Button 
                                       color = "primary" 
                                       onClick = {() => this.handleAddSkills(i)} >Add
                                       </Button> : <Button 
                                       color = "danger" 
                                       onClick = {() => this.handleRemoveSkill(i)}>Remove</Button>
                                   }
                                   </Col>
                               </Row>
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

export default ContactDetail