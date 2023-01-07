import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  if(action.type==="USER_INPUT"){
    return { value: action.val,isValid:action.val.includes('@') }
  }
  if(action.type==="INPUT_BLUR"){
    return {value:state.value,isValid:state.value.includes('@')}
  }
  return { value: "", isValid: false };

};

const passwordRedcer = (state, action)=>{
  if(action.type==="USER_INPUT"){
    return { value: action.val,isValid:action.val.trim().length > 6 }
  }
  if(action.type==="INPUT_BLUR"){
    return {value:state.value,isValid:state.value.trim().length > 6}
  }
  return { value: "", isValid: false };

}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredCollage, setEnteredCollage] = useState("");
  const [collageIsValid,setCollageIsValid] = useState();
  // const [passwordIsValid, setPasswordIsValid] = useState();
  // const [emailIsValid, setEmailIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword]=useReducer(passwordRedcer, {
    value: "",
    isValid: null,
  })

  useEffect(() => {
    console.log("EFFECT RUNNING");
  }, []);

  const {isValid:emailIsValid}=emailState
  const {isValid:passwordIsValid}=passwordState

  useEffect(()=>{
    console.log('checking form validity!')
   const identifier= setTimeout(()=>{
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    },500)

   return ()=>{
    console.log('CleanUp!')
    clearTimeout(identifier)
   };
  },[emailIsValid,passwordIsValid])

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type:"USER_INPUT",val:event.target.value})
    setFormIsValid(
      event.target.value.includes("@") && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type:'USER_INPUT',val:event.target.value})
    setFormIsValid(
      emailState.isValid && passwordState.isValid
    );
  };
  const collageChangeHandler = (event) => {
    setEnteredCollage(event.target.value);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({type:'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type:'INPUT_BLUR'})
  };
  const validateCollageHandler = () => {
    setCollageIsValid(enteredCollage.trim().length);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value, enteredCollage);
    // setEnteredEmail("");
    // setEnteredPassword("");
    setEnteredCollage("");
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
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
            passwordState.isValid === false ? classes.invalid : ""
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
        <div
          className={`${classes.control} ${
            collageIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="text">Collage_Name</label>
          <input
            type="text"
            id="collage"
            value={enteredCollage}
            onChange={collageChangeHandler}
            onBlur={validateCollageHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
