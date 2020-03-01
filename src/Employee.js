import React from 'react'
import { Jumbotron, Button, Container, Col,  Form, FormGroup, Label, Input, FormText  } from 'reactstrap';
import FormDesign from './FromDesign';
import EmployeeShow from './EmployeeShow';

class Employee extends React.Component{

    constructor(){
        super()
        this.state = {
            employees : [{
                empId : Number(Date.now()),
                name : '',
                designation : '',
                skills : [''],
                contactDetails : [{
                    type : '',
                    mobile : ''
                }],
                dateOfBirth : Date.now()
            }],
            employeeShow : false
        }
        
    }

    headerStyle = {
        textAlign : "center"
    }

    handleFormDataChange = (e, id) => {
        let data = {[e.target.name] : e.target.value}
        console.log(data)
        this.setState(prevState => ({
            employees : prevState.employees.map(emp => {
                if(emp.empId == id){
                    console.log({...emp, ...data})
                    return {...emp, ...data}
                } else {
                    return {...emp}
                }
            })
        }))
    }

    handleViewData = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.setState({employeeShow : true})
    }

    handleAddEmployee = (e) => {
        console.log('employee added')
        this.setState(prevState => ({
            employees : [...prevState.employees, {
                empId : Number(Date.now()),
                name : '',
                designation : '',
                skills : [''],
                contactDetails : [{
                    type : '',
                    mobile : ''
                }],
                dateOfBirth : Date.now(),
                dob : ''
            } ]
        }))
        console.log(this.state)
    }

    handleRemoveEmployee = (id) => {
        console.log('employee removed')
        this.setState(prevState => ({
            employees : prevState.employees.filter(emp => emp.empId !== id)
        }))
        console.log(this.state)
    }

    handleDateOfBirth = (date, id) => {
           const monthNames = ["January", "February", "March", "April", "May", "June",
           "July", "August", "September", "October", "November", "December"
         ]
             let temp = `${date.getDate()}-${monthNames[date.getMonth()]}-${date.getFullYear()}`
         
                 console.log(temp)
        this.setState(prevState => ({
            employees : prevState.employees.map(emp => {
                if(emp.empId == id){
                    return {...emp, dateOfBirth : date, dob : temp}
                } else {
                    return {...emp}
                }
            })
        }))
    }

    handleDownloadFile = () => {
        console.log(this.state.employees)
        const empData = [...this.state.employees]
        empData.forEach(emp => delete emp.empId)
        const data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(empData))
        let ele = document.getElementById('download')
        ele.setAttribute("href", "data:"+data)
        ele.setAttribute("download", "data.json")
    }

    handleAddSkills = (i, id) => {
        this.setState(prevState => ({
            employees : prevState.employees.map(emp => {
                if(emp.empId == id){
                    return {...emp, skills : [...emp.skills, ""]}
                } else {
                    return emp
                }
            })
        }))
    }

    handleRemoveSkills = (i, id) => {
        this.setState(prevState => ({
            employees : prevState.employees.map(emp => {
                if(emp.empId == id){
                    emp.skills.splice(i, 1)
                    return emp
                } else {
                    return emp
                }
            })
        }))
    }

    handleSkillData = (e, i, id) => {
        console.log(e.target.value)
        const value = e.target.value
        console.log('hiiiii')
        this.setState(prevState => ({
            employees : prevState.employees.map(emp => {
                if(emp.empId == id){
                    emp.skills[i] = value
                    console.log('emp', emp)
                    return emp
                } else {
                    return emp
                }
            })
        }))
    }

    handleAddContactDetails = (i, id) => {
        this.setState(prevState => ({
            employees : prevState.employees.map(emp => {
                if(emp.empId == id){
                    return {...emp, contactDetails : [...emp.contactDetails, {
                        type : '',
                        mobile : ''
                    }]}
                } else {
                    return emp
                }
            })
        }))
    }

    handleRemoveContactDetails = (i, id) => {
        this.setState(prevState => ({
            employees : prevState.employees.map(emp => {
                if(emp.empId == id){
                    emp.contactDetails.splice(i, 1)
                    return emp
                } else {
                    return emp
                }
            })
        }))
    }

    handleContactDetails = (e, i, id) => {
        let data = {[e.target.name] : e.target.value}
        let name = e.target.name
        let value = e.target.value
        // console.log(data)
        this.setState(prevState => ({
            employees : prevState.employees.map(emp => {
                if(emp.empId == id){
                    emp.contactDetails[i][name] = value
                    return emp

                } else {
                    return emp
                }
            })
        }))
    }

    render(){
        return(
            <div>{console.log('state',this.state)}
                <Container>
                <br></br>
                <h1 className="display-3" style = {this.headerStyle} ><strong>Employee Data</strong></h1>
                <br></br>
               
                    <FormDesign 
                    employees = {this.state.employees}
                    handleFormDataChange = {this.handleFormDataChange}
                    handleRemoveEmployee = {this.handleRemoveEmployee}
                    handleDateOfBirth = {this.handleDateOfBirth}
                    handleAddSkills = {this.handleAddSkills}
                    handleRemoveSkills = {this.handleRemoveSkills}
                    handleSkillData = {this.handleSkillData}
                    handleAddContactDetails = {this.handleAddContactDetails}
                    handleRemoveContactDetails = {this.handleRemoveContactDetails}
                    handleContactDetails = {this.handleContactDetails}
                    />
                <br></br>
                  <Col style = {{display : "block", textAlign : "center"}} >
                  <Button color = "primary" size = "lg" block onClick = {this.handleAddEmployee} >Add Employee</Button>
                    <br></br>
                    <Button color = "success" size = "lg" block onClick = {
                        this.handleViewData
                    } >View Employee</Button>
                  </Col>

                  <br></br>
                <br></br>
                {
                    this.state.employeeShow && <EmployeeShow employees = {this.state.employees}
                    handleDownloadFile = {this.handleDownloadFile}
                     />
                }
                </Container>
               
            </div> 
        )
    }
}

export default Employee