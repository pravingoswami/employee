import React from 'react'
import ContactDetail from './ContactDetail'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap'

function EmpployeeForm(props){

    return(
        <div>
            {
                props.employees && props.employees.map(() => {
                    return(
                        <div>
                            <Label for="name">Email</Label>
                <Input type="text" name="name" id="name" onChange = {this.handleFormData} value = {this.state.name} placeholder="Enter Your Name" />
                <br></br>
                <Label for="designation">Designation</Label>
                <Input type="text" name="designation" id="designation" onChange = {this.handleFormData} value = {this.state.designation} placeholder="Enter Your Designation" />
                <br></br>

                 <Label >Contact Details</Label>
                <ContactDetail contactDetails = {this.state.contactDetails} 
                handleContactDetailsChange = {this.handleContactDetailsChange}
                handleAddContactDetails = {this.handleAddContactDetails} handleRemoveContactDetails = {this.handleRemoveContactDetails} />
                <br></br>
                <Row>
                    <Col md = "12">
                    <Label for="skills">Skills</Label>
                   {
                       this.state.skills.map((skill, i) => {
                           return (
                               <Row key = {i} >
                                   <Col md = "10">
                                   <Input type="text" name="skills" id="skills" onChange = {(e) => this.handleSkills(e, i)} placeholder="Enter Your Skills." />
                                   <br></br>
                                   </Col>
                                   <Col md = "2">
                                   {
                                       i === 0 ? <Button color = "primary" onClick = {() => this.addSkills(i)} >Add</Button> : <Button color = "danger" onClick = {() => this.handleRemoveSkill(i)} >Remove</Button>
                                   }
                                   </Col>
                               </Row>
                           )
                       })
                   }
                    </Col>
                </Row>
                <Label>Date Of Birth</Label>
                <br></br>
                <DatePicker
                    selected={this.state.dob}
                    onChange={this.handleDateOfBirth}
                    dateFormat = "Pp"
                />
                <br></br>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default EmpployeeForm