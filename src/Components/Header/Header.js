
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css'
import { useCart } from 'react-use-cart';
import { useState } from 'react';
import { logout } from '../Admin/Auth/auth';


const Header = () => {

  const navigate = useNavigate();

  const [isSignedIn, setIsSignedIn] = useState(() => {
    const userLogged = localStorage.getItem("access_token");
    return userLogged || false;
  });

  const signout = () => {
    setIsSignedIn(false);
    logout();
    navigate('/');
  }
  const location = useLocation();

  // Function to determine if a link is active
  const isLinkActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  const { totalUniqueItems } = useCart();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div>

  
        {/* <div className="hero_area">
          <div className="bg-box">
            <img src="assets/images/hero-bg.jpg" alt="" />
          </div> */}

          {/* header section strats */}
          <header className="header_section">
            <div className="container">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <Link to="/">
                  <a className="navbar-brand" href="./">
                    <span>Feane</span>
                  </a>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className=""> </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav  mx-auto ">
                    <li className={`nav-item ${isLinkActive('/Home')}`}>
                      <a className="nav-link" href="./">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>

                    <Link to="/Food">
                      <li className="nav-item">
                        <a className={`nav-link ${isLinkActive('/Food')}`} href="./">
                          Menu
                        </a>
                      </li>

                    </Link>

                    <Link to='/About'>
                      <li className="nav-item">
                        <a className={`nav-link ${isLinkActive('/About')}`} href="./">
                          About
                        </a>
                      </li>
                    </Link>

                    <Link to='/Reservation'>
                      <li className="nav-item">
                        <a className={`nav-link ${isLinkActive('/Reservation')}`} href="./">
                          Book Table
                        </a>
                      </li>
                    </Link>
                  </ul>
                  <div className="user_option">
                    {/* <div
                      className={`dropdown ${dropdownOpen ? 'show' : ''}`}
                      onMouseEnter={toggleDropdown}
                      onMouseLeave={closeDropdown}
                    > */}

                      <div className="dropdown">
                        <a
                          href="#"
                          className="user_link"
                          id="userDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fa fa-user" aria-hidden="true" />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="userDropdown">
                          {isSignedIn ? (
                            <>
                              <Link to="/" className="dropdown-item" onClick={signout}>
                                Sign out
                              </Link>
                              <Link to="/dashboard" className="dropdown-item">
                                Dashboard
                              </Link>
                            </>
                          ) : (
                            <>
                              <Link to="/signin" className="dropdown-item">
                                Sign in
                              </Link>
                              <Link to="/register" className="dropdown-item">
                                Register
                              </Link>
                            </>
                          )}
                        </div>
                      </div>




                      <Link to='/NewCart'>

                        <a className="cart_link" href="./">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 456.029 456.029"
                            style={{ enableBackground: "new 0 0 456.029 456.029" }}
                            xmlSpace="preserve"
                          >
                            <g>
                              <g>
                                <path
                                  d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
             c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
             C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
             c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
             C457.728,97.71,450.56,86.958,439.296,84.91z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
             c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                                />
                              </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </a>

                      </Link>
                      <div className="tip">{totalUniqueItems}</div>


                    

                      <form className="form-inline">
                        <button
                          className="btn  my-2 my-sm-0 nav_search-btn"
                          type="submit"
                        >
                          <i className="fa fa-search" aria-hidden="true" />
                        </button>
                      </form>
                      <a href="" className="order_online">
                      Order Online
                    </a>
                   
                  </div>
                </div>
              </nav>
            </div>
          </header>
          {/* end header section */}
        </div>


      
    // </div>



  );
};

export default Header;