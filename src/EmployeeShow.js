import React from 'react'
import { Jumbotron, Button } from 'reactstrap'
import './show.css'

function EmployeeShow(props){

    return(
        <div>
            <Jumbotron>
                {
                    props.employees && props.employees.map((emp, i) => {
                        i++
                        return (
                            <div>
                                <h3><strong>Employee #{i}</strong></h3>
                                <table>
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
                                        <td>{
                            emp.contactDetails.map(contact => <li>{contact.type} - {contact.mobile}</li>)
                            }</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Skills</strong></td>
                        <td>{
                            emp.skills.map(skill => <li>{skill}</li>)
                            }</td>
                                    </tr>
                                    <tr>
                                        <td><strong>DOB</strong></td>
                                        <td>{emp.dob}</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <br></br>
                            </div>
                        )
                    })
                }
            </Jumbotron>
            <Button color = "success" size = "lg" 
            block 
            onClick = {props.handleDownloadFile}
    ><a id = "download" style = {{color : "white", textDecoration : "none"}} >Download Json</a></Button>
            <br></br>
            <br></br>
        </div>
    )
}
export default EmployeeShow