import axios from "axios"
import React, { useEffect, useState } from "react";
import './dashboard.css'
export default function AdminFood() {
    const [foods, setFoods] = useState([]);
    const [categories, setCategories] = useState([]);
    const [inputs, setInputs] = useState([]);

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

    const deleteUser = (id) => {
        axios.delete(`http://localhost/hamburger/food_crud/delete_food.php?id=${id}`).then(function (response) {
            getDatas();
        });
    }

   
   
    const clearData = () => {


        setInputs(values => ({ ...values, "id": "", "price": "", "name": "", "image": "", "description": "", "category_id": "" }))
    }
    useEffect(() => {
        getCategories();
    }, []);



    /* for update */

    function getSinglefood
        (id) {
        document.getElementById('modelbutton').click();
        axios.get(`http://localhost/hamburger/food_crud/single_food.php?id=${id}`).then(function (response) {
            setInputs(response.data);
            setInputs(values => ({ ...values, "image": "" }))
        });
    }

    return (
        <>
        <div className="dashboard">
        <div className="reportsPage">
            <nav className="navbar navbar-expand-xl">
                <div className="container h-100">
                    <a className="navbar-brand" href="/dashboard">
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

                            <li className="nav-item">
                                <a className="nav-link active" href="/menus">
                                    <i className="fas fa-shopping-cart" /> Products
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./account">
                                    <i className="far fa-user" /> Accounts
                                </a>
                            </li>

                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link d-block" href="/signout">
                                    Admin, <b>Logout</b>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container mt-5">
                <div className="row tm-content-row">
                    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 tm-block-col">
                        <div className="tm-bg-primary-dark tm-block tm-block-products">
                            <div className="tm-product-table-container">
                                <table className="table table-hover tm-table-small tm-product-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">&nbsp;</th>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th>Image</th>
                                            <th>Category Name</th>
                                            <th>Actions</th>
                                            <th scope="col">&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                            {/* <td className="tm-product-name"></td> */}
                                            {foods && foods.length > 0 ? (foods.map((d, key) =>
                                                <tr key={key}>
                                                    <th scope="row">
                                                        <input type="checkbox" />
                                                    </th>

                                                    <td>{d.id}</td>
                                                    <td>{d.name}</td>
                                                    <td>{d.description}</td>
                                                    <td>{d.price}</td>
                                                    <td><img src={d.image} alt="" width={50} /></td>
                                                    <td>{d.c_name}</td>

                                                    <td>
                                                        <a href="#" className="tm-product-delete-link">
                                                            <i onClick={() => deleteUser(d.id)} className="far fa-trash-alt tm-product-delete-icon" />
                                                        </a>
                                                    </td>

                                                </tr>
                                            )) : (<tr></tr>)}
                                            {/*  */}
                                        
                                    </tbody>
                                </table>
                            </div>
                            {/* table container */}
                            <a
                                id="modelbutton"
                                onClick={clearData}
                                href="/addProducts"
                                className="btn btn-primary btn-block text-uppercase mb-3"
                            >
                                Add new product
                            </a>
                            <button className="btn btn-primary btn-block text-uppercase">
                                Delete selected products
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-block-col">
                        <div className="tm-bg-primary-dark tm-block tm-block-product-categories">
                            <h2 className="tm-block-title">Product Categories</h2>
                            <div className="tm-product-table-container">
                                <table className="table tm-table-small tm-product-table">
                                    <tbody>
                                        <tr>
                                            <td className="tm-product-name">Product Category 1</td>
                                            <td className="text-center">
                                                <a href="#" className="tm-product-delete-link">
                                                    <i className="far fa-trash-alt tm-product-delete-icon" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tm-product-name">Product Category 2</td>
                                            <td className="text-center">
                                                <a href="#" className="tm-product-delete-link">
                                                    <i className="far fa-trash-alt tm-product-delete-icon" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tm-product-name">Product Category 3</td>
                                            <td className="text-center">
                                                <a href="#" className="tm-product-delete-link">
                                                    <i className="far fa-trash-alt tm-product-delete-icon" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tm-product-name">Product Category 4</td>
                                            <td className="text-center">
                                                <a href="#" className="tm-product-delete-link">
                                                    <i className="far fa-trash-alt tm-product-delete-icon" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tm-product-name">Product Category 5</td>
                                            <td className="text-center">
                                                <a href="#" className="tm-product-delete-link">
                                                    <i className="far fa-trash-alt tm-product-delete-icon" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tm-product-name">Product Category 6</td>
                                            <td className="text-center">
                                                <a href="#" className="tm-product-delete-link">
                                                    <i className="far fa-trash-alt tm-product-delete-icon" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tm-product-name">Product Category 7</td>
                                            <td className="text-center">
                                                <a href="#" className="tm-product-delete-link">
                                                    <i className="far fa-trash-alt tm-product-delete-icon" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tm-product-name">Product Category 8</td>
                                            <td className="text-center">
                                                <a href="#" className="tm-product-delete-link">
                                                    <i className="far fa-trash-alt tm-product-delete-icon" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tm-product-name">Product Category 9</td>
                                            <td className="text-center">
                                                <a href="#" className="tm-product-delete-link">
                                                    <i className="far fa-trash-alt tm-product-delete-icon" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tm-product-name">Product Category 10</td>
                                            <td className="text-center">
                                                <a href="#" className="tm-product-delete-link">
                                                    <i className="far fa-trash-alt tm-product-delete-icon" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tm-product-name">Product Category 11</td>
                                            <td className="text-center">
                                                <a href="#" className="tm-product-delete-link">
                                                    <i className="far fa-trash-alt tm-product-delete-icon" />
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* table container */}
                            <button className="btn btn-primary btn-block text-uppercase mb-3">
                                Add new category
                            </button>
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
            {/* https://jquery.com/download/ */}
            {/* https://getbootstrap.com/ */}
        </>
    )
}