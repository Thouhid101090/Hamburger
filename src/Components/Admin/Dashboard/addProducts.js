import React from 'react';
import './dashboard.css'
import axios from "axios"
import { useState, useEffect } from 'react';
const AddProducts = () => {
    const [foods, setFoods] = useState([]);
    const [categories, setCategories] = useState([]);
    const [inputs, setInputs] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);


    useEffect(() => {
        getDatas();
    }, []);
    function getDatas() {
        axios.get('http://localhost/hamburger/food_crud/index_food.php').then(function (response) {
            setFoods(response.data.data);
        });
    }
    function getCategories() {
        axios.get('http://localhost/hamburger/food_crud/index_category.php').then(function (response) {
            setCategories(response.data.data);
        });
    }



    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    // const onFileChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = (event) => {
    //             const dataUrl = event.target.result;
    //             setSelectedImage(dataUrl);
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };

    const onFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Ensure that a file is selected before reading it
            const reader = new FileReader();
            reader.onload = (event) => {
                // Handle the result, e.g., set it in your state
                const dataUrl = event.target.result;
                setInputs({ ...inputs, image: dataUrl });
                setSelectedImage(dataUrl);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost/hamburger/food_crud/create_food.php', inputs).then(function (response) {
            console.log(response.data)
            getDatas();
            if (response.data.status === 1)
                document.getElementById('modelbutton').click();
        });
    }
    const clearData = () => {


        setInputs(values => ({ ...values, "id": "", "price": "", "name": "", "image": "", "description": "", "category_id": "" }))
    }
    useEffect(() => {
        getCategories();
    }, []);

    const onUploadButtonClick = () => {
        document.getElementById('fileInput').click();
    };
    return (
        <div className='dashboard'>
            <div className="reportsPage">
                <>
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
                                        <a className="nav-link" href="/dashboard">
                                            <i className="fas fa-tachometer-alt" /> Dashboard
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
          </li> */}
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/menus">
                                            <i className="fas fa-shopping-cart" /> Products
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="accounts.html">
                                            <i className="far fa-user" /> Accounts
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
                    <div className="container tm-mt-big tm-mb-big">
                        <div className="row">
                            <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
                                <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                                    <div className="row">
                                        <div className="col-12">
                                            <h2 className="tm-block-title d-inline-block">Add Product</h2>
                                        </div>
                                    </div>
                                    <div className="row tm-edit-product-row">
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <form onSubmit={handleSubmit} encType="multipart/form-data" action="" className="tm-edit-product-form">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="name">Product Name</label>
                                                            <input
                                                                value={inputs.name}
                                                                onChange={handleChange}
                                                                id="name"
                                                                name="name"
                                                                type="text"
                                                                className="form-control validate"
                                                                required=""
                                                            />
                                                            <input value={inputs.id} type="hidden" name="id" />
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="description">Description</label>
                                                            <input
                                                                value={inputs.description}
                                                                onChange={handleChange}
                                                                className="form-control validate"
                                                                name="description"
                                                                required=""
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="category">Category</label>
                                                            <select
                                                                className="custom-select tm-select-accounts"
                                                                id="category"
                                                                onChange={handleChange}
                                                                name="category_id"
                                                            >
                                                                <option selected="">Select category</option>
                                                                {categories.map((category, key) =>
                                                                    <option value={category.id} key={key}>{category.c_name}</option>
                                                                )}
                                                            </select>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group mb-3 col-xs-12 col-sm-12">
                                                                <label htmlFor="expire_date">Price</label>
                                                                <input
                                                                    value={inputs.price}
                                                                    onChange={handleChange}
                                                                    id="expire_date"
                                                                    name="price"
                                                                    type="text"
                                                                    className="form-control validate"
                                                                    data-large-mode="true"
                                                                />
                                                            </div>
                                                            {/* <div className="form-group mb-3 col-xs-12 col-sm-6">
                                                                <label htmlFor="stock">Units In Stock</label>
                                                                <input
                                                                    id="stock"
                                                                    name="stock"
                                                                    type="text"
                                                                    className="form-control validate"
                                                                    required=""
                                                                />
                                                            </div> */}
                                                        </div>

                                                    </div>
                                                    <div className="col-6">
                                                        <div className="col-xl-12 col-lg-12 col-md-12 mx-auto mb-4">
                                                            <div>
                                                                <div className="tm-product-img-dummy mx-auto">
                                                                    {selectedImage ? (
                                                                        <img
                                                                            src={selectedImage}
                                                                            alt="Selected Image"
                                                                            style={{ maxWidth: '100%', maxHeight: '200px' }}
                                                                        />
                                                                    ) : (
                                                                        <i
                                                                            className="fas fa-cloud-upload-alt tm-upload-icon"
                                                                            onClick={onUploadButtonClick}
                                                                        />
                                                                    )}
                                                                </div>
                                                                <div className="custom-file mt-3 mb-3">
                                                                    <input
                                                                        type="file"
                                                                        id="fileInput"
                                                                        style={{ display: 'none' }}
                                                                        onChange={onFileChange}
                                                                    />
                                                                    <input
                                                                        type="button"
                                                                        className="btn btn-primary btn-block mx-auto"
                                                                        value="UPLOAD PRODUCT IMAGE"
                                                                        onClick={onUploadButtonClick}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>

                                                </div>
                                                <div className="col-12">
                                                    <button


                                                        type="submit"
                                                        className="btn btn-primary btn-block text-uppercase"
                                                    >
                                                        Add Product Now
                                                    </button>
                                                </div>

                                            </form>
                                        </div>

                                    </div>
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

                </>

            </div>
        </div>
    );
};

export default AddProducts;