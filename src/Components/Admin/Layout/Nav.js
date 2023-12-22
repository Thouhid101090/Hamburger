import { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../Dashboard/dashboard.css'
function Nav() {
    const userLogged = JSON.parse(localStorage.getItem("userdata"));
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isServiceVisible, setIsServiceVisible] = useState(false);
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };
    const toggleService = () => {
        setIsServiceVisible(!isServiceVisible);
    };
    return (


        <div className="col-3 left_col">
            <div className="left_col scroll-view">
                {/* ***************** */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* ******************** */}

                <div className="navbar nav_title" style={{ border: 0 }}>
                    <a href="./" className="site_title">
                        <img src="assents/img/favicon.png" alt="" />
                        <span>T.Hamburger</span>
                    </a>
                </div>

                <div className="profile">
                    <div className="profile_pic">
                        <img src={`http://localhost/hamburger/${userLogged.image}`} alt="..." className="img-circle profile_img" />
                    </div>
                    <div className="profile_info">
                        <span style={{ fontSize: "20px", marginLeft: "10px" }}>Welcome,</span>
                        <h2 style={{ marginLeft: "15px", fontSize: "20px" }}>{userLogged.name}</h2>
                    </div>
                </div>

                <div className="clearfix"></div>
                <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                    <div className="menu_section">
                        {/* <h3>General</h3> */}
                        <ul className="nav side-menu clear">
                            <li className="nav-item">
                                <a style={{ color: "white", fontSize: "20px" }} className="nav-link" href="./foods">Admin-Foods</a>
                            </li>

                            {/* <li className="nav-item">
                                <a style={{ color: "white", fontSize: "20px", marginRight: "29px" }} onClick={toggleMenu} className="nav-link" href="./galleryapi">Admin-Gallery</a>
                            </li> */}

                            <li className="nav-item">
                                <a style={{ color: "white", fontSize: "20px", marginRight: "29px" }} onClick={toggleMenu} className="nav-link" href="./">Home</a>
                            </li>

                            <li className="nav-item">
                                <a style={{ color: "white", fontSize: "20px", marginRight: "29px" }} onClick={toggleMenu} className="nav-link" href="./food">Home-Menu</a>
                            </li>



                        </ul>
                    </div>
                </div>
            </div>
        </div>





    );
}

export default Nav;