import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Signinform from '../forms/signinform';
import CoverLogo from '../../assets/images/WhiteNowOwl.png';

import './style.css';

   class Signin extends Component {
      render() {
         return (
            <div className="signup-page">
               <div className="container">
                  <div className="head-links mt-3">
                     <Link className="float-left" to="/">HOME</Link>
                     <Link className="float-right" to="/signup">SIGNUP</Link>
                  </div>

               </div>
               <div className="signup-panel">
                  <div className="row justify-content-center sipa">
                     <div className="col-md-3 bg-primary">
                        <img className="img-fluid px-5 pt-5" src={CoverLogo} alt="logo"></img>
                        <h1 className="text-center txt-white">KIDDO SITTER</h1>
                        <h3 className="text-center txt-white mt-3">Welcome Back</h3>
                     </div>
                     <div className="col-md-4 bg-white text-secondary">
                        <Signinform />
                     </div>
                  </div>
               </div>
            </div>
          )
      }
   }

export default Signin;
