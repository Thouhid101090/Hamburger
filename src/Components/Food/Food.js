import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { useCart } from 'react-use-cart';


const Food = () => {
  const BASE_URL = 'http://localhost/hamburger';
  const [foods, setFood] = useState([]);
  const [Burgers, setBurger] = useState([]);
  const [Pizzas, setPizza] = useState([]);
  const [Pastas, setPasta] = useState([]);
  const [Frieds, setFried] = useState([]);
  const [activeFilter, setActiveFilter] = useState('*');


  const { addItem } = useCart()
  useEffect(() => {
    

    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/menu.php`);
        if (!response.ok) {
          throw new Error('Network response was not ok');


          


        }
        const data = await response.json();
        setFood(data);
        setBurger(data.filter(food => food.category_id === '1'));
        setPizza(data.filter(food => food.category_id === '2'));
        setPasta(data.filter(food => food.category_id === '3'));
        setFried(data.filter(food => food.category_id === '4'));

      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);



  return (
    <>


      <div class="sub_page">

        <div class="hero_area">
          <div class="bg-box">
            <img src="assets/images/hero-bg.jpg" alt="" />
          </div>

          <Header></Header>

        </div>
        <div>
          <section className="food_section layout_padding">
            <div className="container">
              <div className="heading_container heading_center">
                <h2>Our Menu</h2>
              </div>
              <ul className="filters_menu">
                <li
                  className={activeFilter === '*' ? 'active' : ''}
                  data-filter="*"
                  onClick={() => setActiveFilter('*')}
                >
                  All
                </li>
                <li
                  className={activeFilter === '1' ? 'active' : ''}
                  data-filter="1"
                  onClick={() => setActiveFilter('1')}
                >
                  Burger
                </li>
                <li
                  className={activeFilter === '2' ? 'active' : ''}
                  data-filter="2"
                  onClick={() => setActiveFilter('2')}
                >
                  Pizza
                </li>
                <li
                  className={activeFilter === '3' ? 'active' : ''}
                  data-filter="3"
                  onClick={() => setActiveFilter('3')}
                >
                  Pasta
                </li>
                <li
                  className={activeFilter === '4' ? 'active' : ''}
                  data-filter="4"
                  onClick={() => setActiveFilter('4')}
                >
                  Fries
                </li>
              </ul>

              <div className="filters-content">
                <div className="row grid">

                  {foods && foods.length>0 ? (foods
                    .filter(food => activeFilter === '*' || food.category_id === activeFilter)
                    .map(food => (
                      // console.log(menus);
                      <div className="col-sm-6 col-lg-4">
                        <div className="box">
                          <div>
                            <div className="img-box">
                              <img src={food.image} alt="" />
                            </div>


                            <div className="detail-box">
                              <h5>{food.name}</h5>
                              <p>
                                {food.description}
                              </p>
                              <div className="options">
                                <h6>{food.price}</h6>
                                <a href="#">
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
                                    onClick={() => addItem(food)}
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))) : (<h2>This Item is not abailable now.You Will get Soon. </h2>)}


                  {/* {foods.map((food) => (
                    // console.log(menus);
                    <div className="col-sm-6 col-lg-4 all pizza">
                      <div className="box">
                        <div>
                          <div className="img-box">
                            <img src={food.image} alt="" />
                          </div>


                          <div className="detail-box">
                            <h5>{food.name}</h5>
                            <p>
                              {food.description}
                            </p>
                            <div className="options">
                              <h6>{food.price}</h6>
                              <a href="">
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
                                  onClick={() => addItem(food)}
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))} */}




                  {/* {Burgers && Burgers.length > 0 ? (Burgers.map((burger) => (
                    <div id='burger' className="col-sm-6 col-lg-4 all burger">
                      <div className="box">
                        <div>
                          <div className="img-box">
                            <img src="assets/images/f2.png" alt="" />
                          </div>
                          <div className="detail-box">
                            <h5>{burger.name}</h5>
                            <p>
                              {burger.description}
                            </p>
                            <div className="options">
                              <h6>{burger.price}</h6>
                              <a href="">
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
                                  onClick={() => addItem(burger)}

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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))) : <h4>No Burgers are available</h4>} */}

                  {/* <div className="col-sm-6 col-lg-4 all pizza">
                    <div className="box">
                      <div>
                        <div className="img-box">
                          <img src="assets/images/f3.png" alt="" />
                        </div>
                        <div className="detail-box">
                          <h5>Delicious Pizza</h5>
                          <p>
                            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                            velit, magnam voluptatem repellendus sed eaque
                          </p>
                          <div className="options">
                            <h6>$17</h6>
                            <a href="">
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}



                  {/* <div className="col-sm-6 col-lg-4 all pasta">
                    <div className="box">
                      <div>
                        <div className="img-box">
                          <img src="assets/images/f4.png" alt="" />
                        </div>
                        <div className="detail-box">
                          <h5>Delicious Pasta</h5>
                          <p>
                            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                            velit, magnam voluptatem repellendus sed eaque
                          </p>
                          <div className="options">
                            <h6>$18</h6>
                            <a href="">
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}


                  {/* <div className="col-sm-6 col-lg-4 all fries">
                    <div className="box">
                      <div>
                        <div className="img-box">
                          <img src="assets/images/f5.png" alt="" />
                        </div>
                        <div className="detail-box">
                          <h5>French Fries</h5>
                          <p>
                            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                            velit, magnam voluptatem repellendus sed eaque
                          </p>
                          <div className="options">
                            <h6>$10</h6>
                            <a href="">
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="col-sm-6 col-lg-4 all pizza">
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img src="assets/images/f6.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5>Delicious Pizza</h5>
                        <p>
                          Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                          velit, magnam voluptatem repellendus sed eaque
                        </p>
                        <div className="options">
                          <h6>$15</h6>
                          <a href="">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}


                  {/* <div className="col-sm-6 col-lg-4 all burger">
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img src="assets/images/f7.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5>Tasty Burger</h5>
                        <p>
                          Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                          velit, magnam voluptatem repellendus sed eaque
                        </p>
                        <div className="options">
                          <h6>$12</h6>
                          <a href="">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}


                  {/* <div className="col-sm-6 col-lg-4 all burger">
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img src="assets/images/f8.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5>Tasty Burger</h5>
                        <p>
                          Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                          velit, magnam voluptatem repellendus sed eaque
                        </p>
                        <div className="options">
                          <h6>$14</h6>
                          <a href="">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                  {/* <div className="col-sm-6 col-lg-4 all pasta">
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img src="assets/images/f9.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5>Delicious Pasta</h5>
                        <p>
                          Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                          velit, magnam voluptatem repellendus sed eaque
                        </p>
                        <div className="options">
                          <h6>$10</h6>
                          <a href="">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                </div>
              </div>
              <div className="btn-box">
                <a href="">View More</a>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* </body> */}

    </>

  );
};

export default Food;