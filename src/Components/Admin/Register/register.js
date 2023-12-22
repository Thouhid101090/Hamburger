import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './register.css'
import { register } from "../Auth/auth";
import Header from "../../Header/Header";

function Register() {
    const [inputs, setInputs] = useState([]);
    const navigate = useNavigate();

    const onFileChange = (e) => {
        let files = e.target.files;
        let fileReader = new FileReader();
        fileReader.readAsDataURL(files[0]);

        fileReader.onload = (event) => {
            const name = "image";
            const value = event.target.result
            setInputs(values => ({ ...values, [name]: value }));
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await register(inputs);
        navigate('/signin');
    }
    return (
        <>
        <div className="registerCSS">
            <Header ></Header>
            <body>
                <div className="bg-img">
                    <div className="content">
                        <header>Sign Up</header>
                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                {/* <span className="fa fa-user"></span> */}
                                <input type="text" required placeholder="Enter Full Name"
                                    name="name" onChange={handleChange} />
                            </div>
                            <div className="field">
                                {/* <span className="fa fa-user"></span> */}
                                <input type="text" required placeholder="Enter Email Address"
                                    name="email" onChange={handleChange} />
                            </div>
                            <div className="field space">
                                {/* <span className="fa fa-lock"></span> */}
                                <input type="password" className="pass-key" required placeholder="Password"
                                    name="password" onChange={handleChange} />
                                <span className="show">SHOW</span>
                            </div>
                            <div className="field">
                                {/* <span className="fa fa-user"></span> */}
                                <input type="file" required placeholder="Image"
                                    name="image" onChange={onFileChange} />
                            </div>

                            <div className="field">
                                <input type="submit" value="Create Account" />
                            </div>
                        </form>



                    </div>
                </div>




            </body>
            </div>
        </>
    )
}
export default Register;