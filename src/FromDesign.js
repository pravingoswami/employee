import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Jumbotron } from 'reactstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import ContactDetail from './ContactDetail';
import SkillForm from './Skills';

class FormDesign extends React.Component{

    handleSkillsData = (e, i, id) => {

    }

    render(){
        return(
            <div>
                {
                    this.props.employees.map((emp, index) => {
                        return(
                            <Jumbotron>
                                 <Form onSubmit = {this.handleSubmit} >
                                    <Label>Name</Label>

                                    <Input type="text" 
                                    name="name"
                                    value = {emp.name}
                                    onChange = { (e) => this.props.handleFormDataChange(e,emp.empId)} 
                                    placeholder="Enter Your Name" />


                                    <br></br>

                                    <Label>Designation</Label>

                                    <Input type="text" 
                                    name = "designation"
                                    value = {emp.designation}
                                    onChange = { (e) => this.props.handleFormDataChange(e,emp.empId)}
                                    placeholder="Enter Your Designation" />


                                    <br></br>

                                    <Label>Skills</Label>
                                    {
                                        emp.skills.map((skill, i) => {
                                            return (
                                                <div>
                                                    <Row key = {i} >
                                                    <Col row = "10">
                                                        <Input 
                                                            type = "text"
                                                            name = " skills"
                                                            value = {skill}
                                                            placeholder = "Enter Your Skill"
                                                           onChange = {(e) => this.props.handleSkillData(e,i, emp.empId)}
                                                        />
                                                    </Col>

                                                    <Col md = "2">
                                                        {
                                                            i === 0 ? <Button
                                                            color = "primary"
                                                            onClick = {() => this.props.handleAddSkills(i, emp.empId)}
                                                            >Add</Button> : <Button
                                                            color = "danger"
                                                            onClick = {() => this.props.handleRemoveSkills(i, emp.empId)}
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
                                    <Label>Contact Details</Label>
                                    {
                                        emp.contactDetails.map((contact, i) => {
                                            return (
                                                <div>
                                                    <Row>
                                                        <Col md = "5">
                                                        <Label>Type</Label>
                                                        <Input 
                                                            type = "text"
                                                            name = "type"
                                                            value = {contact.type}
                                                            placeholder = "Enter Your Type"
                                                           onChange = {(e) => this.props.handleContactDetails(e,i, emp.empId)}
                                                        />
                                                        </Col>

                                                        <Col md = "5">
                                                        <Label>Mobile</Label>
                                                        <Input 
                                                            type = "text"
                                                            name = "mobile"
                                                            value = {contact.mobile}
                                                            placeholder = "Enter Your Mobile No."
                                                           onChange = {(e) => this.props.handleContactDetails(e,i, emp.empId)}
                                                        />
                                                        </Col>

                                                        <Col md = "2">
                                                        <br></br>
                                                             {i === 0 ? <Button color = "primary" onClick = {() => this.props.handleAddContactDetails(i, emp.empId)} >Add</Button> : <Button color = "danger" onClick = {() => this.props.handleRemoveContactDetails(i, emp.empId)} >Remove</Button>}
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
                                        onChange={(date) => this.props.handleDateOfBirth(date, emp.empId)}
                                    />
                                    <br></br>
                                </Form>
                                <br></br>
                                {
                                    index !== 0 && <Button color = "danger"  
                                    onClick = {() => this.props.handleRemoveEmployee(emp.empId)}
                                    >Remove</Button>
                                }
                            </Jumbotron>
                        )
                    })
                }
            </div>
        )
    }
}

export default FormDesign