import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    numberOfPersons: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the formData to your backend for storage in the database
    console.log(formData);
  };

  return (
    <>
      <div class="sub_page">
        <div class="hero_area">
          <div class="bg-box">
            <img src="assets/images/hero-bg.jpg" alt="" />
          </div>
          <Header />
        </div>
        <div>
          <section className="book_section layout_padding">
            <div className="container">
              <div className="heading_container">
                <h2>Book A Table</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form_container">
                    <form onSubmit={handleSubmit}>
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="contact"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Your Email"
                        />
                      </div>
                      <div>
                        <select
                          name="people"
                          value={formData.numberOfPersons}
                          onChange={handleChange}
                          className="form-control nice-select wide"
                        >
                          <option value="" disabled selected>
                            How many persons?
                          </option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <div>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                      <div className="btn_box">
                        <button type="submit">Book Now</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="map_container">
                    <div id="googleMap" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reservation;
