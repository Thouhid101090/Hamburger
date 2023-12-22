import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useCart } from "react-use-cart";
import './Cart.css'

const Cart = () => {
    const {
        isEmpty,
        cartTotal,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart(); /* to use cart */
    const [couponCode, setCouponCode] = useState("");
    const { setCartMetadata } = useCart();
    const [discount, setDiscount] = useState(0);
    const applyCoupon = () => {
        if (couponCode === "discount") {
            const couponDiscount = cartTotal * 0.15; // 15% discount
            setDiscount(couponDiscount);
            setCartMetadata({ discount: couponDiscount });

        } else {
            setDiscount(0); // Reset discount if the coupon code is invalid.
        }
    };
    const discountedTotal = cartTotal - discount;
    if (isEmpty) return (
        <>
            <Header /> 
            <div className="container p-5 m-5 text-center"><h1 className="p-5 m-5">Your cart is empty</h1>
            </div>

        </>
    )
    console.log(items)
    if (isEmpty) {
        return (
            <div className="container-xxl cart-body p-0">
                {/* <!-- Navbar & Hero Start --> */}
                <div className="container-xxl position-relative p-0">
                    <Header />
                    <div className="container-xxl py-5 bg-dark hero-header mb-5">
                        <div className="container text-center my-5 pt-5 pb-4">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Takeout</h1>
                            {/* <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center text-uppercase">
                                    <li className="breadcrumb-item"><a href="./">Home</a></li>
                                    <li className="breadcrumb-item"><a href="./">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                                </ol>
                            </nav> */}
                        </div>
                    </div>
                </div>
                <p className='text-dark mx-5'>Your cart is empty</p>
                <Footer />
            </div>
        );
    }
    return (
        <div className="container-xxl bg-white p-0">

            {/* <!-- Navbar & Hero Start --> */}
            <div className="container-xxl position-relative p-0">
                <Header />
                <div className="container-xxl py-5 bg-dark hero-header mb-5">
                    <div className="container text-center my-5 pt-5 pb-4">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Takeout</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center text-uppercase">
                                <li className="breadcrumb-item"><a href="./">Home</a></li>
                                <li className="breadcrumb-item"><a href="./">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Cart</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>




            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row mb-5">
                        <form className="col-md-12" method="post">
                            <div className="site-blocks-table">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="product-thumbnail"><h6>Image</h6></th>
                                            <th className="product-name"><h6>Product</h6></th>
                                            <th className="product-price"><h6>Price</h6></th>
                                            <th className="product-quantity"><h6 className='px-4'>Quantity</h6></th>
                                            <th className="product-total"><h6>Total</h6></th>
                                            <th className="product-remove"><h6>Remove</h6></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.map((item) => (
                                            <tr key={item.id}>
                                                <td className="col-lg-6 menu-item filter-starters">
                                                    <img src={item.image} alt="{item.name}" className="menu-img" />
                                                </td>
                                                <td className="product-name">
                                                    <h2 className="h5 text-black mt-4">{item.name}</h2>
                                                </td>
                                                <td >
                                                    <h6 className='mt-4'>${item.price}</h6>
                                                </td>
                                                <td>
                                                    <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{ maxWidth: '120px' }}>
                                                        <div className="input-group-prepend">
                                                            <button className="btn decrease mt-3" type="button" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>&minus;</button>
                                                        </div>
                                                        <input type="text" className="form-control text-center quantity-amount mt-3" value={item.quantity} placeholder=""
                                                            aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                                        <div className="input-group-append">
                                                            <button className="btn increase mt-3" type="button" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}> + </button>
                                                        </div>
                                                    </div>

                                                </td>
                                                <td>
                                                    <h6 className='mt-4'>${(item.price * item.quantity).toFixed(2)}</h6>
                                                </td>
                                                <button className="btn btn-black btn-sm mt-4 px-4" onClick={() => removeItem(item.id)}>X</button>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="row mb-5">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <button className="btn btn-success py-3 px-3 fw-bold" id='cartButton'>Update Cart</button>
                                </div>
                                <div className="col-md-6">
                                    <button className="btn btn-success py-3 px-3 fw-bold">Continue Shopping</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="discount__content">
                                        <h6>Discount codes</h6>
                                        <form onSubmit={(e) => { e.preventDefault(); applyCoupon(); }}>
                                            <input className="cupon-field" type="text" placeholder="Enter your coupon code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />


                                            <div onSubmit={(e) => { e.preventDefault(); applyCoupon(); }}>
                                                <button type="submit" className="btn  btn-success">Apply</button>
                                            </div>
                                        </form>
                                    </div>
                                    {discount > 0 && (
                                        <div className="applied-discount ">
                                            Discount Applied: {"$" + discount.toFixed(2)}
                                        </div>
                                    )}
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-md-6 pl-5">
                            <div className="row justify-content-end">
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-12 text-right border-bottom mb-5">
                                            <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                                        </div>
                                    </div>
                                    <div className="row mb-5">
                                        <div className="col-md-6">
                                            
                                        
                                      
                                            <strong className="text-black"><span>Subtotal</span>  ${cartTotal.toFixed(2)}</strong><br />
                                            <strong className="text-black"><span>Discount</span>  {"$" + discount.toFixed(2)}</strong><br />
                                            <strong className="text-black"><span>Total</span>  {"$" + discountedTotal.toFixed(2)}</strong>

                                      
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <button className="btn btn-success py-3 px-3 fw-bold" onClick={() => (window.location.href = "./checkout")} >Proceed To Checkout</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    )
}

export default Cart
