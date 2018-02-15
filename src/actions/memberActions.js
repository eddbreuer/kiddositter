import axios from 'axios';
import history from '../history';
import config from '../config'



export function signupnew(data) {
   return function (){
      data = JSON.stringify(data);
      console.log(config.api_url);
      axios.post(`${config.api_url}/signup`, data)
         .then((res) => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            history.push('/dashboard');
         })
         .catch(res => res.data.error)
   }
}
