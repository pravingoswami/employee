import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Jumbotron } from 'reactstrap'
function SkillForm(props){
    return(
        <div>
             {
                                        props.skills.map((skill, i) => {
                                            return (
                                                <div>
                                                    <Row key = {i} >
                                                    <Col row = "10">
                                                        <Input 
                                                            type = "text"
                                                            name = " skills"
                                                            placeholder = "Enter Your Skill"
                                                            onChange = {(e) => {
                                                                props.handleSkillsData(e, i, props.empId)
                                                            }}
                                                        />
                                                    </Col>

                                                    <Col md = "2">
                                                        {
                                                            i === 0 ? <Button
                                                            color = "primary"
                                                            onClick = {() => props.handleAddSkills(i, props.empId)}
                                                            >Add</Button> : <Button
                                                            color = "danger"
                                                            onClick = {() => this.props.handleRemoveSkills(i, props.empId)}
                                                            >Remove</Button>
                                                        }
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

export default SkillForm