import React from 'react';
import Employee from './Employee';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, NavbarBrand} from 'reactstrap'

function App() {
  return (
    <div>
       <div>
       <Navbar color="dark" dark >
        <NavbarBrand ><strong>DASHBOARD</strong></NavbarBrand>
        </Navbar>
       </div>
       <Employee />
    </div>
  );
}

export default App;
