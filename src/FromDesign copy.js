import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap'
import ContactDetail from './ContactDetail'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

class FormDesign extends React.Component{

    constructor(){
        super()
        this.state =             {   
            empId : Number(Date.now()),
            name : '',
            designation :'',
            contactDetails : [
                {
                    id : Number(Date.now()),
                    type : '',
                    mobile : ''
                }
            ],
            skills : [''],
            dob : Date.now()
        }
}

    handleFormData = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }



    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name :this.state.name,
            designation : this.state.designation,
            contactDetails : this.state.contactDetails,
            skills : this.state.skills,
        dob : this.state.dob
            }
        console.log(formData)
    }

    addSkills = () => {
        this.setState(prevState => ({
            skills : [...prevState.skills, ""]
        }))
    }

    handleSkills = (e, i) => {
        this.state.skills[i] = e.target.value
        this.setState(prevState => ({
            skills : prevState.skills
        }))
    }

    handleRemoveSkill = (i) => {
        this.state.skills.splice(i, 1)
        this.setState(prevState => ({
            skills : prevState.skills
        }))
    }


    handleAddContactDetails = (e) => {
        this.setState(prevState => ({
            contactDetails : [...prevState.contactDetails, {
                id : Number(Date.now()),
                type : '',
                mobile : ''
            }]
        }))
    }

    handleRemoveContactDetails = (id) => {
        this.setState(prevState => ({
            contactDetails : prevState.contactDetails.filter(detail => detail.id !== id)
        }))
    }

    handleContactDetailsChange = (e) => {
        let contactDetails = [...this.state.contactDetails]
        console.log('contact', contactDetails)
        contactDetails[e.target.dataset.id][e.target.name] = e.target.value
    }

    handleDateOfBirth = (date) => {
        this.setState({dob : date})
    }

    render(){
        return(
            <div>
            <Form onSubmit = {this.handleSubmit} >
                <Label for="name">Email</Label>
                <Input type="text" name="name" id="name" onChange = {this.handleFormData} value = {this.state.name} placeholder="Enter Your Name" />
                <br></br>
                <Label for="designation">Designation</Label>
                <Input type="text" name="designation" id="designation" onChange = {this.handleFormData} value = {this.state.designation} placeholder="Enter Your Designation" />
                <br></br>
                {/* <Row>
                    <Col md = "5">
                    <Label for="types">Types</Label>
                    <Input type="text" name="types" id="types" onChange = {this.handleContactDetails} value = {this.state.contactDetails.types} placeholder="Types" />
                    </Col>
                    <Col md = "5">
                    <Label for="mobile">Mobile</Label>
                    <Input type="text" name="mobile" id="mobile" onChange = {this.handleContactDetails} value = {this.state.contactDetails.mobile} placeholder="Enter Your Mobile No." />
                    </Col>
                    <Col md = "2">
                        <br></br>
                    <Button color = "primary" >Add</Button>
                    </Col>
                </Row> */}
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
                                   <Input type="text" 
                                   value = {skill}
                                   name="skills" id="skills" onChange = {(e) => this.handleSkillData(e, i, emp.empId)} placeholder="Enter Your Skills." />
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
                <br></br>
            <Button color = "primary" type = "submit">Submit</Button>
            </Form>
         
            </div>
        )
    }

}

export default FormDesign





import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap'


function ContactDetail(props){

    return(
        <div>
            {/* <Row>{console.log(props.contactDetails)}
                    <Col md = "5">
                    <Label for="types">Types</Label>
                    <Input type="text" name="types" id="types"   placeholder="Types" />
                    </Col>
                    <Col md = "5">
                    <Label for="mobile">Mobile</Label>
                    <Input type="text" name="mobile" id="mobile"  placeholder="Enter Your Mobile No." />
                    </Col>
                    <Col md = "2">
                        <br></br>
                    <Button color = "primary" >Add</Button>
                    </Col>
                </Row> */}
                {
                    props.contactDetails && props.contactDetails.map((detail, index) => {
                        return(
                  <div>
                                <Row key = {detail.id} >{console.log(props.contactDetails)}
                            <Col md = "5">
                            <Label for="type">Type</Label>
                            <Input type="text" name="type" id={`type-${detail.id}`} data-id = {index}  onChange = {props.handleContactDetailsChange} placeholder="Type" />
                            </Col>
                            <Col md = "5">
                            <Label for="mobile">Mobile</Label>
                            <Input type="text" name="mobile"  id={`mobile-${detail.id}`} data-id = {index}  onChange = {props.handleContactDetailsChange} placeholder="Enter Your Mobile No." />
                            </Col>
                            <Col md = "2">
                                <br></br>
                            {index == 0 ? <Button color = "primary" onClick = {props.handleAddContactDetails} >Add</Button> : <Button color = "danger" onClick = {() => props.handleRemoveContactDetails(detail.id)} >Remove</Button>}
                            </Col>
                        </Row>
                        <br></br>
                      </div>
                        )
                    })
                }
        </div>
    )
}

export default ContactDetail