import React from "react";
import '../scss/Auth.scss';

const Auth = () => {
  return (
    <form className="auth">
      <h1 className="auth__title">Welcome back!</h1>
      <p className="auth__description">We´re so excited to see you again!</p>
      <div className="col">
        <label className="auth__input-label" htmlFor="login">EMAIL OR PHONE NUMBER</label>
        <input className="auth__input" type="text" id="login" />
      </div>
      <div className="col">
        <label className="auth__input-label" htmlFor="password">PASSWORD</label>
        <input className="auth__input" type="text" id="password" />
        <a className="auth__subtitle-link" href="/">Forgot your password?</a>
      </div>
      <div className="col">
        <input className="auth__submit" type="submit" value="Log in" />
        <span className="auth__subtitle">Need an account? <a href="/" className="auth__subtitle-link">Registrtion</a></span>
      </div>
    </form> 
  )
};

export default Auth;
