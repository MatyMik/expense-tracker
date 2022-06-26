import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState('');
  const changeEmail = (event) => {
        setEmail(event.target.value)
  }
  const submitForm = (event) => {
    event.preventDefault();
    console.log(event)
  }
  return (
    <div className="sign-up">
      <h1 className="sign-up__title">Sign up</h1>
      <div>Already have an account? Then please</div>
      <NavLink to="/signin">Sign in</NavLink>
      <form onSubmit={submitForm} action="/">
        <label htmlFor='emailAddressInput'>E-mail address</label>
        <input id='emailAddressInput' type='email' onChange={changeEmail} value={email} name='email'></input>
        <button type='submit'> Submit </button>
      </form>
    </div>
  )
}
