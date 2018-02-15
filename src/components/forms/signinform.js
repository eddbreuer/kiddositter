import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

   class Signinform extends Component {
      state={
         passshow: true,
         eyeIcon: 'icon-view-off',
         passType: 'password',
         hideText: 'show password'
      }

      showHide(){
         this.setState({passshow: !this.state.passshow});
         this.setState({eyeIcon: !this.state.eyeIcon});
         this.setState({passType: !this.state.passType});
         this.setState({hideText: !this.state.hideText});
      }

      render() {
         return (
            <div className="sgnin-form">
               <div className="mt-5 text-center">
                  <h2>Login</h2>
               </div>
               <Form className="mx-5 mt-5">
                  <FormGroup>
                     <Label for="exampleEmail">Email</Label>
                     <Input className="cu-fo-1" type="email" name="email" id="exampleEmail" />
                  </FormGroup>
                  <FormGroup>
                     <Label for="examplePassword">Password</Label>
                     <Input className="cu-fo-1" type={this.state.passType ? 'password' : 'text'} name="password" id="examplePassword"  autoComplete="none" />
                     <span className="eye-icon float-right" onClick={this.showHide.bind(this)}>{this.state.passshow ? true : false}
                        <em className="text-sm-right">{this.state.hideText ? 'hide password ' : 'show password '} </em>
                        <i className={this.state.eyeIcon ? 'icon-view i2x' : 'icon-view-off i2x' }></i>
                     </span>

                  </FormGroup>
                  <div className="text-center mt-5">
                     <Button outline size="lg" color="primary" className="mx-auto">SUBMIT</Button>
                  </div>
               </Form>
               <div className="mt-5">
                  <p className="float-left">No account yet? <Link to="/signup">Register Here</Link></p>
                  <p className="float-right">Forgot your <Link to="/passrecover">password?</Link></p>
               </div>
            </div>
         )
      }
   }

export default Signinform;
