import React from 'react';
import './dashboard.css'
const Dashboard = () => {
    return (
        <div className='dashboard'>
            
<>
  <div className="reportsPage">
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
              <a className="nav-link active" href="/dashboard">
                <i className="fas fa-tachometer-alt" />
                Dashboard
                <span className="sr-only">(current)</span>
              </a>
            </li>

            {/* <li className="nav-item dropdown">
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
                  Reports <i className="fas fa-angle-down" />
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
            </li> */}

            <li className="nav-item">
              <a className="nav-link" href="/menus">
                <i className="fas fa-shopping-cart" />
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="accounts.html">
                <i className="far fa-user" />
                Accounts
              </a>
            </li>
            {/* <li className="nav-item dropdown">
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
                  Settings <i className="fas fa-angle-down" />
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
            </li> */}
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
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="text-white mt-5 mb-5">
            Welcome back, <b>Admin</b>
          </p>
        </div>
      </div>
      {/* row */}
      <div className="row tm-content-row">





        {/* <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
          <div className="tm-bg-primary-dark tm-block">
            <h2 className="tm-block-title">Latest Hits</h2>
            <canvas id="lineChart" />
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
          <div className="tm-bg-primary-dark tm-block">
            <h2 className="tm-block-title">Performance</h2>
            <canvas id="barChart" />
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
          <div className="tm-bg-primary-dark tm-block tm-block-taller">
            <h2 className="tm-block-title">Storage Information</h2>
            <div id="pieChartContainer">
              <canvas
                id="pieChart"
                className="chartjs-render-monitor"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
          <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-overflow">
            <h2 className="tm-block-title">Notification List</h2>
            <div className="tm-notification-items">
              <div className="media tm-notification-item">
                <div className="tm-gray-circle">
                  <img
                    src="img/notification-01.jpg"
                    alt="Avatar Image"
                    className="rounded-circle"
                  />
                </div>
                <div className="media-body">
                  <p className="mb-2">
                    <b>Jessica</b> and <b>6 others</b> sent you new{" "}
                    <a href="#" className="tm-notification-link">
                      product updates
                    </a>
                    . Check new orders.
                  </p>
                  <span className="tm-small tm-text-color-secondary">
                    6h ago.
                  </span>
                </div>
              </div>
              <div className="media tm-notification-item">
                <div className="tm-gray-circle">
                  <img
                    src="img/notification-02.jpg"
                    alt="Avatar Image"
                    className="rounded-circle"
                  />
                </div>
                <div className="media-body">
                  <p className="mb-2">
                    <b>Oliver Too</b> and <b>6 others</b> sent you existing{" "}
                    <a href="#" className="tm-notification-link">
                      product updates
                    </a>
                    . Read more reports.
                  </p>
                  <span className="tm-small tm-text-color-secondary">
                    6h ago.
                  </span>
                </div>
              </div>
              <div className="media tm-notification-item">
                <div className="tm-gray-circle">
                  <img
                    src="img/notification-03.jpg"
                    alt="Avatar Image"
                    className="rounded-circle"
                  />
                </div>
                <div className="media-body">
                  <p className="mb-2">
                    <b>Victoria</b> and <b>6 others</b> sent you{" "}
                    <a href="#" className="tm-notification-link">
                      order updates
                    </a>
                    . Read order information.
                  </p>
                  <span className="tm-small tm-text-color-secondary">
                    6h ago.
                  </span>
                </div>
              </div>
              <div className="media tm-notification-item">
                <div className="tm-gray-circle">
                  <img
                    src="img/notification-01.jpg"
                    alt="Avatar Image"
                    className="rounded-circle"
                  />
                </div>
                <div className="media-body">
                  <p className="mb-2">
                    <b>Laura Cute</b> and <b>6 others</b> sent you{" "}
                    <a href="#" className="tm-notification-link">
                      product records
                    </a>
                    .
                  </p>
                  <span className="tm-small tm-text-color-secondary">
                    6h ago.
                  </span>
                </div>
              </div>
              <div className="media tm-notification-item">
                <div className="tm-gray-circle">
                  <img
                    src="img/notification-02.jpg"
                    alt="Avatar Image"
                    className="rounded-circle"
                  />
                </div>
                <div className="media-body">
                  <p className="mb-2">
                    <b>Samantha</b> and <b>6 others</b> sent you{" "}
                    <a href="#" className="tm-notification-link">
                      order stuffs
                    </a>
                    .
                  </p>
                  <span className="tm-small tm-text-color-secondary">
                    6h ago.
                  </span>
                </div>
              </div>
              <div className="media tm-notification-item">
                <div className="tm-gray-circle">
                  <img
                    src="img/notification-03.jpg"
                    alt="Avatar Image"
                    className="rounded-circle"
                  />
                </div>
                <div className="media-body">
                  <p className="mb-2">
                    <b>Sophie</b> and <b>6 others</b> sent you{" "}
                    <a href="#" className="tm-notification-link">
                      product updates
                    </a>
                    .
                  </p>
                  <span className="tm-small tm-text-color-secondary">
                    6h ago.
                  </span>
                </div>
              </div>
              <div className="media tm-notification-item">
                <div className="tm-gray-circle">
                  <img
                    src="img/notification-01.jpg"
                    alt="Avatar Image"
                    className="rounded-circle"
                  />
                </div>
                <div className="media-body">
                  <p className="mb-2">
                    <b>Lily A</b> and <b>6 others</b> sent you{" "}
                    <a href="#" className="tm-notification-link">
                      product updates
                    </a>
                    .
                  </p>
                  <span className="tm-small tm-text-color-secondary">
                    6h ago.
                  </span>
                </div>
              </div>
              <div className="media tm-notification-item">
                <div className="tm-gray-circle">
                  <img
                    src="img/notification-02.jpg"
                    alt="Avatar Image"
                    className="rounded-circle"
                  />
                </div>
                <div className="media-body">
                  <p className="mb-2">
                    <b>Amara</b> and <b>6 others</b> sent you{" "}
                    <a href="#" className="tm-notification-link">
                      product updates
                    </a>
                    .
                  </p>
                  <span className="tm-small tm-text-color-secondary">
                    6h ago.
                  </span>
                </div>
              </div>
              <div className="media tm-notification-item">
                <div className="tm-gray-circle">
                  <img
                    src="img/notification-03.jpg"
                    alt="Avatar Image"
                    className="rounded-circle"
                  />
                </div>
                <div className="media-body">
                  <p className="mb-2">
                    <b>Cinthela</b> and <b>6 others</b> sent you{" "}
                    <a href="#" className="tm-notification-link">
                      product updates
                    </a>
                    .
                  </p>
                  <span className="tm-small tm-text-color-secondary">
                    6h ago.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}





        <div className="col-12 tm-block-col">
          <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
            <h2 className="tm-block-title">Orders List</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ORDER NO.</th>
                  <th scope="col">STATUS</th>
                  <th scope="col">OPERATORS</th>
                  <th scope="col">LOCATION</th>
                  <th scope="col">DISTANCE</th>
                  <th scope="col">START DATE</th>
                  <th scope="col">EST DELIVERY DUE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <b>#122349</b>
                  </th>
                  <td>
                    <div className="tm-status-circle moving"></div>Moving
                  </td>
                  <td>
                    <b>Oliver Trag</b>
                  </td>
                  <td>
                    <b>London, UK</b>
                  </td>
                  <td>
                    <b>485 km</b>
                  </td>
                  <td>16:00, 12 NOV 2018</td>
                  <td>08:00, 18 NOV 2018</td>
                </tr>
                <tr>
                  <th scope="row">
                    <b>#122348</b>
                  </th>
                  <td>
                    <div className="tm-status-circle pending"></div>Pending
                  </td>
                  <td>
                    <b>Jacob Miller</b>
                  </td>
                  <td>
                    <b>London, UK</b>
                  </td>
                  <td>
                    <b>360 km</b>
                  </td>
                  <td>11:00, 10 NOV 2018</td>
                  <td>04:00, 14 NOV 2018</td>
                </tr>
                <tr>
                  <th scope="row">
                    <b>#122347</b>
                  </th>
                  <td>
                    <div className="tm-status-circle cancelled"></div>Cancelled
                  </td>
                  <td>
                    <b>George Wilson</b>
                  </td>
                  <td>
                    <b>London, UK</b>
                  </td>
                  <td>
                    <b>340 km</b>
                  </td>
                  <td>12:00, 22 NOV 2018</td>
                  <td>06:00, 28 NOV 2018</td>
                </tr>
                <tr>
                  <th scope="row">
                    <b>#122346</b>
                  </th>
                  <td>
                    <div className="tm-status-circle moving"></div>Moving
                  </td>
                  <td>
                    <b>William Aung</b>
                  </td>
                  <td>
                    <b>London, UK</b>
                  </td>
                  <td>
                    <b>218 km</b>
                  </td>
                  <td>15:00, 10 NOV 2018</td>
                  <td>09:00, 14 NOV 2018</td>
                </tr>
                <tr>
                  <th scope="row">
                    <b>#122345</b>
                  </th>
                  <td>
                    <div className="tm-status-circle pending"></div>Pending
                  </td>
                  <td>
                    <b>Harry Ryan</b>
                  </td>
                  <td>
                    <b>London, UK</b>
                  </td>
                  <td>
                    <b>280 km</b>
                  </td>
                  <td>15:00, 11 NOV 2018</td>
                  <td>09:00, 17 NOV 2018</td>
                </tr>
                <tr>
                  <th scope="row">
                    <b>#122344</b>
                  </th>
                  <td>
                    <div className="tm-status-circle pending"></div>Pending
                  </td>
                  <td>
                    <b>Michael Jones</b>
                  </td>
                  <td>
                    <b>London, UK</b>
                  </td>
                  <td>
                    <b>218 km</b>
                  </td>
                  <td>18:00, 12 OCT 2018</td>
                  <td>06:00, 18 OCT 2018</td>
                </tr>
                <tr>
                  <th scope="row">
                    <b>#122343</b>
                  </th>
                  <td>
                    <div className="tm-status-circle moving"></div>Moving
                  </td>
                  <td>
                    <b>Timmy Davis</b>
                  </td>
                  <td>
                    <b>London, UK</b>
                  </td>
                  <td>
                    <b>218 km</b>
                  </td>
                  <td>12:00, 10 OCT 2018</td>
                  <td>08:00, 18 OCT 2018</td>
                </tr>
                <tr>
                  <th scope="row">
                    <b>#122342</b>
                  </th>
                  <td>
                    <div className="tm-status-circle moving"></div>Moving
                  </td>
                  <td>
                    <b>Oscar Phyo</b>
                  </td>
                  <td>
                    <b>London, UK</b>
                  </td>
                  <td>
                    <b>420 km</b>
                  </td>
                  <td>15:30, 06 OCT 2018</td>
                  <td>09:30, 16 OCT 2018</td>
                </tr>
                <tr>
                  <th scope="row">
                    <b>#122341</b>
                  </th>
                  <td>
                    <div className="tm-status-circle moving"></div>Moving
                  </td>
                  <td>
                    <b>Charlie Brown</b>
                  </td>
                  <td>
                    <b>London, UK</b>
                  </td>
                  <td>
                    <b>300 km</b>
                  </td>
                  <td>11:00, 10 OCT 2018</td>
                  <td>03:00, 14 OCT 2018</td>
                </tr>
                <tr>
                  <th scope="row">
                    <b>#122340</b>
                  </th>
                  <td>
                    <div className="tm-status-circle cancelled"></div>Cancelled
                  </td>
                  <td>
                    <b>Wilson Cookies</b>
                  </td>
                  <td>
                    <b>London, UK</b>
                  </td>
                  <td>
                    <b>218 km</b>
                  </td>
                  <td>17:30, 12 OCT 2018</td>
                  <td>08:30, 22 OCT 2018</td>
                </tr>
                <tr>
                  <th scope="row">
                    <b>#122339</b>
                  </th>
                  <td>
                    <div className="tm-status-circle moving"></div>Moving
                  </td>
                  <td>
                    <b>Richard Clamon</b>
                  </td>
                  <td>
                    <b>London, UK</b>
                  </td>
                  <td>
                    <b>150 km</b>
                  </td>
                  <td>15:00, 12 OCT 2018</td>
                  <td>09:20, 26 OCT 2018</td>
                </tr>
              </tbody>
            </table>
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
  </div>
  
</>
            
        </div>
    );
};

export default Dashboard;





