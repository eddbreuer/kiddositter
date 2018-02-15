import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch} from 'react-router-dom';
import history from './history';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';


// import Header from './components/templates/header';
// import Footer from './components/templates/footer';
import Home from './components/landing/home';
import Signup from './components/landing/signup';
import Signin from './components/landing/signin';
import Passrecover from './components/landing/passRecover';
import Confirm from './components/landing/confirm';
import Dashboard from './components/dashboard';


const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(

   <Provider store={store}>
      <Router history={history}>
         <div className="">
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/signin" component={Signin} />
                  <Route exact path="/passrecover" component={Passrecover} />
                  <Route path="/confirm/:token" component={Confirm} />
                  <Route exact path="/dashboard" component={Dashboard} />
 {/* render={(props) => <Confirm store={store} {...props} /> } */}
               </Switch>
         </div>
      </Router>
   </Provider>

   , document.getElementById('root'));
registerServiceWorker();
