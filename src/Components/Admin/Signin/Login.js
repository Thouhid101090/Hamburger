import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { login } from "../Auth/auth";
import './Login.css'

function Signup() {
  useEffect(() => {
    const handleRadioChange = () => {
      if (document.getElementById('log-login-show').checked) {
        document.querySelector('.register-info-box').style.display = 'none';
        document.querySelector('.login-info-box').style.display = 'block';

        document.querySelector('.white-panel').classList.add('right-log');
        document.querySelector('.register-show').classList.add('show-log-panel');
        document.querySelector('.login-show').classList.remove('show-log-panel');
      } else if (document.getElementById('log-reg-show').checked) {
        document.querySelector('.register-info-box').style.display = 'block';
        document.querySelector('.login-info-box').style.display = 'none';

        document.querySelector('.white-panel').classList.remove('right-log');

        document.querySelector('.login-show').classList.add('show-log-panel');
        document.querySelector('.register-show').classList.remove('show-log-panel');
      }
    };

    // Attach change event listener to radio buttons
    document.querySelectorAll('.login-reg-panel input[type="radio"]').forEach((radio) => {
      radio.addEventListener('change', handleRadioChange);
    });

    // Initial setup
    document.querySelector('.login-info-box').style.display = 'none';
    document.querySelector('.login-show').classList.add('show-log-panel');

    return () => {
      // Clean up event listeners
      document.querySelectorAll('.login-reg-panel input[type="radio"]').forEach((radio) => {
        radio.removeEventListener('change', handleRadioChange);
      });
    };
  }, []);

  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let check = await login(inputs);
    if (check)
      navigate('/');
    else
      alert("Sorry! Your email address or password is not correct.");

  }

  return (
    <div className="login-reg-panel">
       <form onSubmit={handleSubmit}>
      <div className="login-info-box">
        <h2>Have an account?</h2>
        <p>Lorem ipsum dolor sit amet</p>
       

        <label id="label-register" htmlFor="log-reg-show">
          Login
        </label>
        <input
          type="radio"
          name="active-log-panel"
          id="log-reg-show"
          defaultChecked="checked"
        />
      </div>
      <div className="register-info-box">
        <h2>Don't have an account?</h2>
        <p>Lorem ipsum dolor sit amet</p>
        <label id="label-login" htmlFor="log-login-show">
          Register
        </label>
        <input type="radio" name="active-log-panel" id="log-login-show" />
      </div>
      <div className="white-panel">
        <div className="login-show">
          <h2>LOGIN</h2>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="button" defaultValue="Login" />
          <a href="">Forgot password?</a>
        </div>
        <div className="register-show">
          <h2>REGISTER</h2>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <input type="button" defaultValue="Register" />
        </div>
      </div>
      </form>
    </div>
  );
}

export default Signup;
