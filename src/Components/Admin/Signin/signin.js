import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './signin.css';
import { login } from "../Auth/auth";
import Header from "../../Header/Header";

function Signin() {
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
    <>
      <div className="signinCSS">
        <body>
          <Header></Header>
          <div className="bg-img">
            <div className="content">
              <header>Login Form</header>
              <form onSubmit={handleSubmit}>
                <div className="field">
                  {/* <span className="fa fa-user"></span> */}
                  <input type="text" required placeholder="Email or Phone" name="email" onChange={handleChange} />
                </div>
                <div className="field space">
                  {/* <span className="fa fa-lock"></span> */}
                  <input type="password" name="password" className="pass-key" required placeholder="Password" onChange={handleChange} />
                  <span className="show">SHOW</span>
                </div>
                <div className="pass">
                  <a href="#">Forgot Password?</a>
                </div>
                <div className="field">
                  <input type="submit" value="LOGIN" />
                </div>
              </form>
              <div className="login">Or login with</div>
              <div className="links">
                <div className="facebook">
                  <i className="fab fa-facebook-f"><span>Facebook</span></i>
                </div>
                <div className="instagram">
                  <i className="fab fa-instagram"><span>Instagram</span></i>
                </div>
              </div>
              <div className="signup">Don't have account?
                <a href="./register"> Signup Now</a>
              </div>
            </div>
          </div>




        </body>
      </div>
    </>
  )
}
export default Signin;