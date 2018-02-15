import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CoverLogo from '../../assets/images/WhiteNowOwl.png';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

import './style.css';

   class Passrecover extends Component {
      render() {
         return (
            <div className="signup-page">
               <div className="container">
                  <div className="head-links mt-3">
                     <Link className="float-left" to="/">HOME</Link>
                     <Link className="float-right" to="/signin">SIGNIN</Link>
                     <Link className="float-right mr-3" to="/signup">SIGNUP</Link>
                  </div>
               </div>
               <div className="signup-panel">
                  <div className="row justify-content-center sipa">
                     <div className="col-md-3 bg-primary">
                        <img className="img-fluid px-5 pt-5" src={CoverLogo} alt="logo"></img>
                        <h1 className="text-center txt-white mt-3">KIDDO SITTER</h1>
                        <h3 className="text-center txt-white mt-5">Please register here</h3>
                        <p className="txt-white mt-5 ml-3">Just register it is easy</p>
                        <p className="txt-white ml-3">Just register it is easy</p>
                     </div>
                     <div className="col-md-4 bg-white text-secondary">
                        <Form className="mx-5 mt-5">
                           <FormGroup>
                              <Label for="exampleEmail">Email</Label>
                              <Input className="cu-fo-1" type="email" name="email" id="exampleEmail" />
                           </FormGroup>
                           <div className="text-center mt-5">
                              <Button outline size="lg" color="primary" className="mx-auto">SUBMIT</Button>
                           </div>
                        </Form>
                     </div>
                  </div>
               </div>
            </div>
          )
      }
   }

export default Passrecover;
