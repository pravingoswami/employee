import React from 'react'
import { Jumbotron, Button, Table } from 'reactstrap'

function EmployeeShow(props){

    return(
        <div>
            <Jumbotron>
                {
                    props.employees && props.employees.map((emp, i) => {
                        i++
                        return (
                            <div key = {emp.empId} >
                                <h3><strong>Employee #{i}</strong></h3>
                                    <Table striped dark >
                                        <tbody>
                                            <tr>
                                                <td><strong>Name</strong></td>
                                                <td>{emp.name}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Designation</strong></td>
                                                <td>{emp.designation}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Contact</strong></td>
                                                <td>
                                                    <ol key = {emp.empId + i} >
                                                        {
                                                            emp.contactDetails.map((contact, i) => <li key = {i} >{contact.type} - {contact.mobile}</li>)
                                                        }
                                                    </ol>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>Skills</strong></td>
                                                <td>
                                                    <ol key = {emp.empId + i} >
                                                        {
                                                            emp.skills.map((skill, i) => <li key = {i} >{skill}</li>)
                                                        }
                                                    </ol>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>DOB</strong></td>
                                                <td>{emp.dob}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <br></br>
                            </div>
                        )
                    })
                }
            </Jumbotron>
            <Button color = "success" size = "lg" block onClick = {props.handleDownloadFile}>
                <a href = "" id = "download" style = {{color : "white", textDecoration : "none"}}>Download Json</a>
            </Button>
            <br></br>
            <br></br>
        </div>
    )
}
export default EmployeeShow