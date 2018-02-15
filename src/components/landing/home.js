import React, { Component } from 'react';
import './style.css';
import CoverLogo from '../../assets/images/WhiteNowOwl.png';

import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Jumbotron
  } from 'reactstrap';


   class Home extends Component {

      constructor(props) {
          super(props);

          this.toggle = this.toggle.bind(this);
          this.state = {
            isOpen: false
          };
        }
        toggle() {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
      render() {
         return (
            <div className="">

            <div className="ksection landing-cover">
                  <Navbar color="faded" light expand="md">
                     <NavbarBrand href="/" className="cover-nav-logo">
                        <div className="">
                           <img src={CoverLogo} className="" alt="what"/>
                           <h1 className="text-white font-weight-bold">Kiddo Sitter</h1>
                        </div>
                     </NavbarBrand>
                     <NavbarToggler onClick={this.toggle} />
                     <Collapse isOpen={this.state.isOpen} navbar>
                     <Nav className="ml-auto" navbar>
                        <NavItem>
                           <Button outline className="btn-lg btn-white" href="/signup">SignUp</Button>{' '}
                        </NavItem>
                        <NavItem>
                           <Button outline className="btn-lg btn-outline-white" href="/signin">SignIn</Button>{' '}
                        </NavItem>
                     </Nav>
                     </Collapse>
                  </Navbar>
                  <Jumbotron className="container cover-jumbo text-center">
                    <h2 className="display-2 font-weight-bold">You can earn kiddositting by kidositting!</h2>
                    <h2 className="font-weight-bold">Share babisitting duty with local parents or just hire a babysitter</h2>
                    <p className="lead mt-5">
                      <Button className="btn-lg btn-white" >I NEED KIDDOSITTER</Button>
                      <Button className="btn-lg btn-outline-white" >I WILL KIDDOSIT</Button>
                    </p>
                  </Jumbotron>
            </div>
            <div className="ksection">
               <div className="how-works ">
                  <div className="how-works-title text-center mb-5">
                     <h1 className="display-2 font-weight-bold">HOW IT WORKS</h1>
                     <h3 className="lead">We will guide you every step of the way.</h3>
                  </div>
                  <div className="container">
                     <hr/>
                     <div className="row mt-5">
                        <div className="col col-xsm-12 text-center">
                           <div className="">
                              <i className="fas fa-5x fa-address-card"></i>
                           </div>
                           <h3>
                              Register first
                           </h3>
                           <p>
                              It is simple easy and fast. Start
                           </p>
                        </div>
                        <div className="col col-xsm-12 text-center">
                           <div className="">
                              <i className="fas fa-5x fa-address-card"></i>
                           </div>
                           <h3>
                              Register first
                           </h3>
                           <p>
                              It is simple easy and fast. Start
                           </p>
                        </div>
                        <div className="col col-xsm-12 text-center">
                           <div className="">
                              <i className="fas fa-5x fa-address-card"></i>
                           </div>
                           <h3>
                              Register first
                           </h3>
                           <p>
                              It is simple easy and fast. Start
                           </p>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
            <footer>
               <h1>Footer Hre</h1>
            </footer>
         </div>
         )
      }
   }

export default Home;
