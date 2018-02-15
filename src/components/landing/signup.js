import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Signupform from '../forms/signupform';
import CoverLogo from '../../assets/images/WhiteNowOwl.png';
import { connect } from 'react-redux';
import * as actions from '../../actions/memberActions';
// import history from '../../history';

import './style.css';

   class Signup extends Component {

      submit = (data) => {
         this.props.signupnew(data);
      }

      render() {
         return (
            <div className="signup-page">
               <div className="container">
                  <div className="head-links mt-3">
                     <Link className="float-left" to="/">HOME</Link>
                     <Link className="float-right" to="/signin">SIGNIN</Link>
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
                        <Signupform submit={this.submit}/>
                     </div>
                  </div>
               </div>
            </div>
          )
      }
   }

export default connect(null, actions)(Signup);
