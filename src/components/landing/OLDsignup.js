import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CoverLogo from '../../assets/images/WhiteNowOwl.png';

import './style.css';

   class Signup extends Component {
      render() {
         return (
            <div className="signup-page">
               <div className="container">
                 <div className="row">
                    <div className="col-2">
                      <div className="">
                         <img src={CoverLogo} className="img-fluid" alt="what"/>
                      </div>
                    </div>
                    <div className="col-8">
                      <Link to="/" className="btn btn-lg">HOME</Link>
                    </div>
                    <div className="">
                       <Link className="btn btn-lg" to="/">LOGIN</Link>

                    </div>
                 </div>

                  <div className="signup-panel">
                     <div className="row">
                        <div className="col-5 bg-primary txt-white p-3">
                           <div className="text-center mt-3">
                              <h2>WELCOME</h2>
                           </div>
                           <h3 className="ml-3">Sign up only if you want your babysitting wories to go away</h3>
                           <ul className="list-group ml-4">
                              <li className="list-group-item">Join us for free</li>
                              <li className="list-group-item">It is very simple</li>
                              <li className="list-group-item">Browse profiles of kiddositters</li>
                              <li className="list-group-item">Hire a kidositter</li>
                              <li className="list-group-item">Or become kidositter </li>
                              <li className="list-group-item">And trade babysitting with other kidositters</li>
                           </ul>

                        </div>
                        <div className="col-7 p-3">

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )
      }
   }

export default Signup;
