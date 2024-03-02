import React, {useState} from 'react'
import classes from './Login.module.css'


const Login = ({onLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        onLogin(email, password);
    }

  return (
    <div className={classes.form}>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='emailinput'>Email:</label>
                <input id='emailinput' type="email"></input>
            </div>
            <div>
                <label htmlFor='passwordinput'>Password:</label>
                <input id='passwordinput' type="password"></input>
            </div>

            <button>Login</button>
        </form>
    </div>
  )
}

export default Login;
