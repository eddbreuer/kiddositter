import React, { Component } from 'react';

   class SignupForm extends Component {

      handleChange(event){
         this.setState({[event.target.name]: event.target.value});
      }

      handleSubmit(event){
         event.preventDefault();
      }

      render() {
         return (
            <form onSubmit={this.handleSubmit.bind(this)}>
               <div className="form-group">
                <label>Name</label>
                <input
                   type="text"
                   className="form-control"
                   id="name"
                   aria-describedby="nameHelp"
                   placeholder="Enter yourname"
                   onChange={this.handleChange.bind(this)}
                />
                <small id="nameHelp" className="form-text text-muted">What should we call you in public</small>
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input
                   type="email"
                   className="form-control"
                   id="email"
                   aria-describedby="emailHelp"
                   placeholder="Enter email"
                   onChange={this.handleChange.bind(this)}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                   type="password"
                   className="form-control"
                   id="password"
                   aria-describedby="passwordHelp"
                   autoComplete="off"
                   placeholder="Password"
                   onChange={this.handleChange.bind(this)}
                  />
                <small id="passwordHelp" className="form-text text-muted">Use passwords that are longer then 5 characters</small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                   type="password"
                   className="form-control"
                   id="password1"
                   aria-describedby="password1Help"
                   autoComplete="off"
                   placeholder="Confirm Password"
                   onChange={this.handleChange.bind(this)}
                 />
                <small id="password1Help" className="form-text text-muted">You know what to do here </small>
              </div>
             <div>
                <p><i className="fa fa-map-marker fa-fw"></i>Clearwater, FL<a href="">(change)</a></p>
             </div>
              <button type="submit" className="btn btn-lg btn-outline-danger btn-block">Continue</button>
             <small className="text-muted">By clicking "Continue", you agree to our Terms of Service, Privacy Policy, and Cookie Policy</small>
            </form>
         )
      }
   }

export default SignupForm;
