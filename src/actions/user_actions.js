import history from '../history';

export default function gotoSignin(){
   return function(){
   history.push('/signin')
}
}
