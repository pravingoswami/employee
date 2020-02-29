import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap'

class FormDesign extends React.Component{

    constructor(){
        super()
        this.state = {
            name : '',
            designation :'',
            types : '',
            mobile : '',
            contactDetails : {
                types : '',
                mobile : ''
            },

            skills : [""],
            dob : ''
        }
    }

    handleFormData = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleContactDetails = (e) => {
        this.setState({
            contactDetails : {[e.target.name] : e.target.value}
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name :this.state.name,
            designation : this.state.designation,
            contactDetails : this.state.contactDetails,
            skills : this.state.skills,
            types : this.state.types
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
                <Row>
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
                </Row>
                <br></br>
                <Row>
                    <Col md = "10">
                    <Label for="mobile">Skills</Label>
                   {
                       this.state.skills.map((skill, i) => {
                           return (
                               <Row key = {i} >
                                   <Col md = "10">
                                   <Input type="text" name="skills" id="skills" onChange = {(e) => this.handleSkills(e, i)} placeholder="Enter Your Skills." />
                                   <br></br>
                                   </Col>
                                   <Col md = "2">
                                   <Button color = "danger" onClick = {() => this.handleRemoveSkill(i)} >Remove</Button>
                                   </Col>
                               </Row>
                           )
                       })
                   }
                    </Col>
                    <Col md = "2">
                        <br></br>
                        <Button color = "primary" onClick = {this.addSkills} >Add</Button>
                    </Col>
                </Row>
                <br></br>
                <Button type = "submit" color = "primary" >Submit</Button>
            </Form>
            </div>
        )
    }

}

export default FormDesign