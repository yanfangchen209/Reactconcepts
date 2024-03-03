import React, {useState, useEffect} from 'react'
import classes from './Login.module.css'

/*validate user input when lose focus(onBlur), useEffect() run when dependencies enteredEmail or enteredPassword 
change 
*/
const Login = ({onLogin}) => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassWord] = useState("");
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);


    useEffect(() => {
        setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length >= 8)
    }, [enteredEmail, enteredPassword])

    const submitHandler = (e) => {
        e.preventDefault();
        onLogin(enteredEmail, enteredPassword);
    }

    const changeHandler = (e) => {
        if(e.target.name === "email"){
            setEnteredEmail(e.target.value);
        }
        if(e.target.name === "password"){
            setEnteredPassWord(e.target.value);
        }


    }

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'));

    }

    
    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length >= 8);
        
    }

  return (
        <div className={classes.form}>
            <form onSubmit={submitHandler}>
                <div className={`${classes.control} ${emailIsValid === false ? classes.invalid: ""}`}>
                    <label htmlFor='emailinput'>Email:</label>
                    <input 
                        id='emailinput' 
                        type="email"
                        name="email"
                        value={enteredEmail}
                        onChange={changeHandler}
                        onBlur={validateEmailHandler} 
                    />
                </div>
                <div className={`${classes.control} ${passwordIsValid === false ? classes.invalid: ""}`}>
                    <label htmlFor='passwordinput'>Password:</label>
                    <input 
                    id='passwordinput' 
                    type="password"
                    name="password"
                    value={enteredPassword}
                    onChange={changeHandler}
                    onBlur={validatePasswordHandler} 
                    />
                </div>
                <div className={classes.actions}>    
                    <button className='classes.btn' disabled={!formIsValid}>Login</button>
                </div>
            </form>
        </div>

  )
}

export default Login;
