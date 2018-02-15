import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
// import ip from 'ip';
import axios from 'axios';

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
   InputGroup
} from 'reactstrap';

   class Signupform extends Component {
      constructor(){
         super();
         this.state = {
            passshow: true,
            eyeIcon: 'icon-view-off',
            passType: 'password',
            hideText: 'show',
            data:{
               email: "",
               password: "",
               city: '',
               zip: ''
            },
            loading: false,
            errors:{}
         }
      }

      onChange(event){
         this.setState({...this.state, data:{ ...this.state.data, [event.target.name]: event.target.value}});
      }

      onSubmit(event){
         event.preventDefault();
         const errors = this.validate(this.state.data);
         if(Object.keys(errors).length === 0){
            this.setState({ loading: true });
            this.props.submit(this.state.data);
         } else {
            this.setState({ errors: errors, loading: false})
         }
      }

      validate(data){
         const errors = {};
         if(!data.email) errors.email = "Please enter email";
         if(data.email && !validator.isEmail(data.email)) errors.email = "Invalid Email";
         if(!data.password) errors.password = "Can't be blank";
         if(data.password && data.password.length < 5 ) errors.password = "Password must be atleast 6 characters";
         if(!data.zip.length === 5) errors.zip = "Please enter valid zip code";
         return errors;
      }

      showHide(){
         this.setState({passshow: !this.state.passshow});
         this.setState({eyeIcon: !this.state.eyeIcon});
         this.setState({passType: !this.state.passType});
         this.setState({hideText: !this.state.hideText});
      }

      componentWillMount(){
         // const clientIP = ip.address();
         const clientIP = '67.9.191.214';
         axios.get('http://ip-api.com/json/'+clientIP)
            .then((res) => {
               this.setState({data:{zip: res.data.zip, city: res.data.city}})
            });
      }

      render() {
         return (
            <div className="sgnup-form">
               <div className="mt-4 text-center">
                  <h2>Register Now</h2>
               </div>
               <Form className="mx-5 mt-5" onSubmit={this.onSubmit.bind(this)}>
                  <FormGroup>
                     <Label for="exampleEmail">Email</Label>
                     <Input
                        className="cu-fo-1"
                        type="email"
                        name="email"
                        autoComplete="none"
                        id="exampleEmail"
                        onChange={this.onChange.bind(this)} />
                     {this.state.errors.email && <small className="form-text text-danger">{this.state.errors.email}</small>}
                  </FormGroup>
                  <FormGroup>
                     <Label for="examplePassword">Password</Label>
                     <InputGroup>
                        <Input
                           className="cu-fo-1"
                           type={this.state.passType ? 'password' : 'text'}
                           name="password"
                           id="examplePassword"
                           autoComplete="none"
                           onChange={this.onChange.bind(this)}/>
                        <span
                           className="eye-icon float-right"
                           onClick={this.showHide.bind(this)}>{this.state.passshow ? true : false}
                           <em className="text-sm-right">{this.state.hideText ? 'show' : 'hide'} </em>
                           <i className={this.state.eyeIcon ? 'icon-view-off i2x' : 'icon-view i2x' }></i>
                        </span>
                        <br />
                     </InputGroup>
                     {this.state.errors.password && <small className="form-text text-danger">{this.state.errors.password}</small>}
                  </FormGroup>
                  <FormGroup className="mt-5">
                     <Label for="city">City and zip code (or change zip code)</Label>
                     <InputGroup>
                        <Input
                           style={{width: "60%"}}
                           className="cu-fo-1"
                           type="text"
                           name="city"
                           id="city"
                           autoComplete="none"
                           // value={this.state.city}
                           placeholder={this.state.data.city}
                           onChange={this.onChange.bind(this)}
                        />
                        <Input
                           style={{width: "40%"}}
                           className="cu-fo-1"
                           type="text"
                           name="zip"
                           id="zip"
                           autoComplete="none"
                           // value={this.state.zip}
                           placeholder={this.state.data.zip}
                           onChange={this.onChange.bind(this)}
                        />
                     </InputGroup>
                     {this.state.errors.zip && <small className="form-text text-danger">{this.state.errors.zip}</small>}

                  </FormGroup>
                  <div className="text-center mt-5">
                     <Button outline size="lg" color="primary" className="mx-auto">SUBMIT</Button>
                  </div>
               </Form>
               <div className="my-4 text-center">
                  <p className="mb-3"><em>or</em></p>
                  <Button className="mr-3" color="primary">Signup with Google</Button>
                  <Button color="primary">Signup with Facebook</Button>
               </div>
               <div className="mt-5">
                  <p className="float-left">Already Registered? <Link to="/signin">Login Here</Link></p>
               </div>
            </div>
         )
      }
   }

export default Signupform;
