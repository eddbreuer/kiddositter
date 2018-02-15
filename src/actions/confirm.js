import axios from 'axios';
import history from '../history';
import config from '../config';

export function confirmemail(token){
   return function(){
      axios.post(`${config.api_url}/confirm`, token)
         .then()
         .catch()
   }
}
