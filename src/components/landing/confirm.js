import React, { Component } from 'react';
import * as actions from '../../actions/confirm';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom'

   class Confirm extends Component {


      componentWillMount(){
         const jwt =this.props.match.params.token;
         const token = ({token: jwt})
         this.props.confirmemail(token);
      }
      render() {

         return (
            <Container>
            <div className="jumbotron text-xs-center">
              <h1 className="display-3">Thank You!</h1>
              <p className="lead"><strong>Please check your email</strong> for further instructions on how to complete your account setup.</p>
              <hr/>
              <p>
                Having trouble? <Link to='/'></Link>
              </p>
              <p className="lead">
                <Link className="btn btn-primary btn-sm" to='/dashboard'>Continue to homepage</Link>
              </p>
            </div>
            </Container>
         )
      }
   }

export default connect(null, actions)(Confirm);
