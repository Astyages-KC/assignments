import React, { useState, useContext } from "react";
import AuthForm from "./AuthForm.js";
import { UserContext } from "../context/UserProvider.js";

function Auth() {
  const initState = { username: "", password: "" };
  const { signup, login } = useContext(UserContext);
  //state
  const [inputs, setInputs] = useState(initState);
  const [toggle, setToggle] = useState(false);
  //handleChange
  const handleChange = e => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };
  //handleSubmits for signup and login
  const handleSignupSubmit = e => {
    e.preventDefault();
    signup(inputs);
    setInputs(initState);
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    login(inputs);
    setInputs(initState);
  };

  return (
    <div>
      {!toggle ? (
        <>
          <AuthForm
            inputs={inputs}
            handleChange={handleChange}
            handleSubmit={handleSignupSubmit}
            btnText="Signup"
          />
          <button onClick={() => setToggle(prevToggle => !prevToggle)}>
            Already a member?
          </button>
        </>
      ) : (
        <>
          <AuthForm
            inputs={inputs}
            handleChange={handleChange}
            handleSubmit={handleLoginSubmit}
            btnText="Login"
          />
          <button onClick={() => setToggle(prevToggle => !prevToggle)}>Not a member?</button>
        </>
      )}
    </div>
  );
}

export default Auth;
