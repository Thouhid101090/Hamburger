import React from 'react';
import './dashboard.css'

const Accouts = () => {
    return (
        <div className='dashboard'>  
        <div className="reportsPage">


<>
  <div className="" id="home">
    <nav className="navbar navbar-expand-xl">
      <div className="container h-100">
        <a className="navbar-brand" href="index.html">
          <h1 className="tm-site-title mb-0">Product Admin</h1>
        </a>
        <button
          className="navbar-toggler ml-auto mr-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars tm-nav-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto h-100">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                <i className="fas fa-tachometer-alt" /> Dashboard
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="far fa-file-alt" />
                <span>
                  {" "}
                  Reports <i className="fas fa-angle-down" />{" "}
                </span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Daily Report
                </a>
                <a className="dropdown-item" href="#">
                  Weekly Report
                </a>
                <a className="dropdown-item" href="#">
                  Yearly Report
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="products.html">
                <i className="fas fa-shopping-cart" /> Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="accounts.html">
                <i className="far fa-user" /> Accounts
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-cog" />
                <span>
                  {" "}
                  Settings <i className="fas fa-angle-down" />{" "}
                </span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  Billing
                </a>
                <a className="dropdown-item" href="#">
                  Customize
                </a>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link d-block" href="login.html">
                Admin, <b>Logout</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container mt-5">
      <div className="row tm-content-row">
        <div className="col-12 tm-block-col">
          <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
            <h2 className="tm-block-title">List of Accounts</h2>
            <p className="text-white">Accounts</p>
            <select className="custom-select">
              <option value={0}>Select account</option>
              <option value={1}>Admin</option>
              <option value={2}>Editor</option>
              <option value={3}>Merchant</option>
              <option value={4}>Customer</option>
            </select>
          </div>
        </div>
      </div>
      {/* row */}
      <div className="row tm-content-row">
        <div className="tm-block-col tm-col-avatar">
          <div className="tm-bg-primary-dark tm-block tm-block-avatar">
            <h2 className="tm-block-title">Change Avatar</h2>
            <div className="tm-avatar-container">
              <img
                src="img/avatar.png"
                alt="Avatar"
                className="tm-avatar img-fluid mb-4"
              />
              <a href="#" className="tm-avatar-delete-link">
                <i className="far fa-trash-alt tm-product-delete-icon" />
              </a>
            </div>
            <button className="btn btn-primary btn-block text-uppercase">
              Upload New Photo
            </button>
          </div>
        </div>
        <div className="tm-block-col tm-col-account-settings">
          <div className="tm-bg-primary-dark tm-block tm-block-settings">
            <h2 className="tm-block-title">Account Settings</h2>
            <form action="" className="tm-signup-form row">
              <div className="form-group col-lg-6">
                <label htmlFor="name">Account Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control validate"
                />
              </div>
              <div className="form-group col-lg-6">
                <label htmlFor="email">Account Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control validate"
                />
              </div>
              <div className="form-group col-lg-6">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="form-control validate"
                />
              </div>
              <div className="form-group col-lg-6">
                <label htmlFor="password2">Re-enter Password</label>
                <input
                  id="password2"
                  name="password2"
                  type="password"
                  className="form-control validate"
                />
              </div>
              <div className="form-group col-lg-6">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="form-control validate"
                />
              </div>
              <div className="form-group col-lg-6">
                <label className="tm-hide-sm">&nbsp;</label>
                <button
                  type="submit"
                  className="btn btn-primary btn-block text-uppercase"
                >
                  Update Your Profile
                </button>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-primary btn-block text-uppercase"
                >
                  Delete Your Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <footer className="tm-footer row tm-mt-small">
      <div className="col-12 font-weight-light">
        <p className="text-center text-white mb-0 px-4 small">
          Copyright © <b>2018</b> All rights reserved. Design:{" "}
          <a
            rel="nofollow noopener"
            href="https://templatemo.com"
            className="tm-footer-link"
          >
            Template Mo
          </a>
        </p>
      </div>
    </footer>
  </div>
  {/* https://jquery.com/download/ */}
  {/* https://getbootstrap.com/ */}
</>

            
        </div>
        </div>
    );
};

export default Accouts;