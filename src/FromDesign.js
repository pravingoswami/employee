import React from 'react'
import { Button, Form, Label, Input, Row, Col, Jumbotron } from 'reactstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import Swal from 'sweetalert2'
import validator from 'validator'


function FormDesign(props){
    return(
        <div>
            {
                props.employees.map((emp, index) => {
                    return(
                        <Jumbotron key = {emp.empId} >
                             <Form >

                                <Label>Name</Label>

                                <Input type="text" 
                                name="name"
                                value = {emp.name}
                                onChange = { (e) => props.handleFormDataChange(e,emp.empId)} 
                                placeholder="Enter Your Name" />

                                <br></br>

                                <Label>Designation</Label>

                                <Input type="text" 
                                name = "designation"
                                value = {emp.designation}
                                onChange = { (e) => props.handleFormDataChange(e,emp.empId)}
                                placeholder="Enter Your Designation" />
                                
                                <br></br>

                                <Label>Contact Details</Label>
                                {
                                    emp.contactDetails.map((contact, i) => {
                                        return (
                                            <div key = {i} >
                                                <Row key = {i} >
                                                    <Col md = "5">
                                                    <Label>Type</Label>
                                                    <Input 
                                                        type = "text"
                                                        name = "type"
                                                        value = {contact.type}
                                                        placeholder = "Enter Your Type"
                                                       onChange = {(e) => props.handleContactDetails(e,i, emp.empId)}
                                                    />
                                                    </Col>

                                                    <Col md = "5">
                                                    <Label>Mobile</Label>
                                                    <Input 
                                                        type = "text"
                                                        name = "mobile"
                                                        value = {contact.mobile}
                                                        onBlur = {() => {
                                                            if(contact.mobile.length !== 10 || !validator.isNumeric(contact.mobile)){
                                                                Swal.fire({
                                                                    icon: 'error',
                                                                    title: 'Oops...',
                                                                    text: 'Invalid Mobile Number!'
                                                                  })
                                                            }
                                                        }}
                                                        placeholder = "Enter Your Mobile No."
                                                       onChange = {(e) => props.handleContactDetails(e,i, emp.empId)}
                                                    />
                                                    </Col>

                                                    <Col md = "2">

                                                    <br></br>

                                                         {i === 0 ? <Button color = "primary" onClick = {() => props.handleAddContactDetails(i, emp.empId)} >Add</Button> : <Button color = "danger" onClick = {() => props.handleRemoveContactDetails(i, emp.empId)} >Remove</Button>}

                                                    </Col>
                                                </Row>
                                                <br></br>
                                            </div>
                                        )
                                    })
                                }

                                <br></br>

                                <Label>Skills</Label>
                                {
                                    emp.skills.map((skill, i) => {
                                        return (
                                            <div key = {i} >
                                                <Row key = {i} >
                                                <Col row = "10">
                                                    <Input 
                                                        type = "text"
                                                        name = " skills"
                                                        value = {skill}
                                                        placeholder = "Enter Your Skill"
                                                       onChange = {(e) => props.handleSkillData(e,i, emp.empId)}
                                                    />
                                                </Col>

                                                <Col md = "2">
                                                    {
                                                        i === 0 ? <Button
                                                        color = "primary"
                                                        onClick = {() => props.handleAddSkills(i, emp.empId)}
                                                        >Add</Button> : <Button
                                                        color = "danger"
                                                        onClick = {() => props.handleRemoveSkills(i, emp.empId)}
                                                        >Remove</Button>
                                                    }
                                                </Col>
                                            </Row>
                                            <br></br>
                                            </div>
                                        )
                                    })
                                }

                                <br></br>

                                <Label>Designation</Label>

                                <br></br>

                                <DatePicker
                                    selected={emp.dateOfBirth}
                                    onChange={(date) => props.handleDateOfBirth(date, emp.empId)}
                                />
                                <br></br>
                            </Form>
                            <br></br>
                            {
                                index !== 0 && <Button color = "danger"  
                                onClick = {() => props.handleRemoveEmployee(emp.empId)}
                                >Remove</Button>
                            }
                        </Jumbotron>
                    )
                })
            }
        </div>
    ) 
}

export default FormDesign