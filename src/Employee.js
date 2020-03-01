import React from 'react'
import { Button, Container, Col} from 'reactstrap';
import FormDesign from './FromDesign';
import EmployeeShow from './EmployeeShow';
import Swal from 'sweetalert2'

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
                dateOfBirth : Date.now(),
                dob : ''
            }],
            employeeShow : false
        }     
    }

    headerStyle = {
        textAlign : "center"
    }

    handleFormDataChange = (e, id) => {
        let name = e.target.name
        let value = e.target.value
        this.setState(prevState => ({
            employees : prevState.employees.map(emp => {
                if(emp.empId === id){
                    emp[name] = value
                    return emp
                } else {
                    return {...emp}
                }
            })
        }))
    }

    handleViewData = (e) => {
        e.preventDefault()
        this.state.employees.forEach(emp => {
            if((emp.name === "") || (emp.designation === "")  || (emp.dob === "")){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please Enter the Data!'
                  })
            } else if(emp.skills.find(skill => skill === "")) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please Enter the Data!'
                  })
            } else {
                this.setState({employeeShow : true})
            }
        }) 
    }

    handleAddEmployee = (e) => {
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
    }

    handleRemoveEmployee = (id) => {
        this.setState(prevState => ({
            employees : prevState.employees.filter(emp => emp.empId !== id)
        }))
    }

    handleDateOfBirth = (date, id) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
           "July", "August", "September", "October", "November", "December"
         ]
        let temp = `${date.getDate()}-${monthNames[date.getMonth()]}-${date.getFullYear()}`
        this.setState(prevState => ({
            employees : prevState.employees.map(emp => {
                if(emp.empId === id){
                    return {...emp, dateOfBirth : date, dob : temp}
                } else {
                    return {...emp}
                }
            })
        }))
    }

    handleDownloadFile = () => {
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
                if(emp.empId === id){
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
                if(emp.empId === id){
                    emp.skills.splice(i, 1)
                    return emp
                } else {
                    return emp
                }
            })
        }))
    }

    handleSkillData = (e, i, id) => {
        const value = e.target.value
        this.setState(prevState => ({
            employees : prevState.employees.map(emp => {
                if(emp.empId === id){
                    emp.skills[i] = value
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
                if(emp.empId === id){
                    if(emp.contactDetails.length < 4){
                        return {...emp, contactDetails : [...emp.contactDetails, {
                            type : '',
                            mobile : ''
                        }]}
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Contact Detail information limit exceeds !'
                          })
                          return emp
                    }
                 
                } else {
                    return emp
                }
            })
        }))
    }

    handleRemoveContactDetails = (i, id) => {
        this.setState(prevState => ({
            employees : prevState.employees.map(emp => {
                if(emp.empId === id){
                    emp.contactDetails.splice(i, 1)
                    return emp
                } else {
                    return emp
                }
            })
        }))
    }

    handleContactDetails = (e, i, id) => {
        let name = e.target.name
        let value = e.target.value
        this.setState(prevState => ({
            employees : prevState.employees.map(emp => {
                if(emp.empId === id){
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
            <div>
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
                    <Button color = "success" size = "lg" block onClick = {this.handleViewData
                    } > View Employee</Button>
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