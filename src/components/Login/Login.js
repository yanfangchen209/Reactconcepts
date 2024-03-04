import React, {useState, useEffect, useReducer} from 'react'
import classes from './Login.module.css'

/*validate user input when lose focus(onBlur), useEffect() run when dependencies enteredEmail or enteredPassword 
change 
*/

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
      return { value: action.val, isValid: action.val.includes('@') };
    }
    if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: state.value.includes('@') };
    }
    return { value: '', isValid: false };
  };
  const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
      return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return { value: '', isValid: false };
  };


const Login = ({onLogin}) => {
     // const [enteredEmail, setEnteredEmail] = useState("");
     // const [emailIsValid, setEmailIsValid] = useState(false);
     //const [enteredPassword, setEnteredPassWord] = useState("");
     //const [passwordIsValid, setPasswordIsValid] = useState(false);
     const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null,
      });
      const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null,
      });

    const [formIsValid, setFormIsValid] = useState(false);

    /*debouncing: instead of doing user input every stroke, we make input validation 
    when a user stops typing for some time like 500ms(make a pause during typing).
    how to use useEffect to validate userinput: set a timer, eg.500ms, if user paused longer than 500ms
    check form validity, everytime user input one more char/number, clear the timer, set a new timer, if user
    paused more than 500ms, check form validity, otherwise clear timer.
    */

    // useEffect(() => {

    //     const identifier = setTimeout(() => {
    //         console.log("Checking form validity!");
    //         setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length >= 8 );
    //     }, 500);
    //http request execute only one time
        
    // /*clean up function, it runs before every useEffect executes except the very first
    // time useEffect runs.(the first time useEffect runs, cleanup function doesn't run). 
    // In addition, The cleanup function is run whenever the component where the useEffect() is
    //  specified unmounts from the DOM(component removed or hidden) */ 
    //  return () => {
    //     console.log("CLEAN UP");
    //     clearTimeout(identifier);
    //  }
    // }, [enteredEmail, enteredPassword])

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
    
        // setFormIsValid(
        //   event.target.value.includes('@') && passwordState.isValid
        // );
      };
    
      const passwordChangeHandler = (event) => {
        dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
    
        // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
      };
    
      const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR' });
      };
    
      const validatePasswordHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR' });
      };
    
      const submitHandler = (event) => {
        event.preventDefault();
        onLogin(emailState.value, passwordState.value);
      };
    
      return (
        <div classes={classes.form}>
            <form onSubmit={submitHandler}>
            <div
              className={`${classes.control} ${
                emailState.isValid === false ? classes.invalid : ''
              }`}
            >
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                id="email"
                value={emailState.value}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
              />
            </div>
            <div
              className={`${classes.control} ${
                passwordState.isValid === false ? classes.invalid : ''
              }`}
            >
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={passwordState.value}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
              />
            </div>
            <div className={classes.actions}>
              <button type="submit" disabled={!formIsValid}>
                Login
              </button>
            </div>
          </form>
        </div>
      );
    };
    
    export default Login;