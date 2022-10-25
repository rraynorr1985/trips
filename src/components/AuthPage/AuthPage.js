import SignUpForm from '../SingUpForm/SignUpForm';
import LoginForm from '../LoginForm/LoginForm';

export default function Auth (props) {
    return (
      <main>
        <h1>Auth Page</h1> 
        <SignUpForm setUser={props.setUser}/>
        <LoginForm setUser={props.setUser}/>     
      </main>
    )
  }