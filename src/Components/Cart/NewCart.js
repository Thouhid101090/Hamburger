import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
    } from "mdb-react-ui-kit";
    import React, { useState } from "react";
    import './NewCart.css'
    import { useCart } from "react-use-cart";
import Header from "../Header/Header";
    export default function Basic() {

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
        

    return (

        
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                      <a href="#!" className="text-body">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                        shopping
                      </a>
                    </MDBTypography>
    
                    <hr />
    
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">You have 4 items in your cart</p>
                      </div>
                      <div>
                        <p>
                          <span className="text-muted">Sort by:</span>
                          <a href="#!" className="text-body">
                            price
                            <MDBIcon fas icon="angle-down mt-1" />
                          </a>
                        </p>
                      </div>
                    </div>
    
                    
                     


                    {items.map((item) => (
  <MDBCard className="mb-3" key={item.id}>
    <MDBCardBody>
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-row align-items-center">
          <div>
            <MDBCardImage
              src={item.image}
              fluid
              className="rounded-3"
              style={{ width: "65px" }}
              alt={item.name}
            />
          </div>
          <div className="ms-3">
            <MDBTypography tag="h5">{item.name}</MDBTypography>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center">
          <div style={{ width: "50px" }}>
            <MDBBtn
              color="primary"
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              <MDBIcon icon="minus" />
            </MDBBtn>
          </div>
          <div style={{ width: "50px" }}>
            <MDBTypography tag="h5" className="fw-normal mb-0">
              {item.quantity}
            </MDBTypography>
          </div>
          <div style={{ width: "50px" }}>
            <MDBBtn
              color="primary"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              <MDBIcon icon="plus" />
            </MDBBtn>
          </div>
          <div style={{ width: "80px" }}>
            <MDBTypography tag="h5" className="mb-0">
              ${item.price}
            </MDBTypography>
          </div>

          <div style={{ width: "80px" }}>
            <MDBTypography tag="h5" className="mb-0">
            <h6 className='mt-4'>${(item.price * item.quantity).toFixed(2)}</h6>
            </MDBTypography>
          </div>
          <a href="#!" style={{ color: "#cecece" }}>
            <MDBIcon fas icon="trash-alt" onClick={() => removeItem(item.id)} />
          </a>
        </div>
      </div>
    </MDBCardBody>
  </MDBCard>
))}



                    
    
                    
                  </MDBCol>
    
                  <MDBCol lg="5">
                    <MDBCard className="bg-primary text-white rounded-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <MDBTypography tag="h5" className="mb-0">
                            Card details
                          </MDBTypography>
                          {/* <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" /> */}
                        </div>
    
                        <p className="small">Card type</p>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-visa fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-amex fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                        </a>
    
                        <form className="mt-4">
                          <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                            placeholder="Cardholder's Name" contrast />
    
                          <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                            minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />
    
                          <MDBRow className="mb-4">
                            <MDBCol md="6">
                              <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                                minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                            </MDBCol>
                            <MDBCol md="6">
                              <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                                maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                            </MDBCol>
                          </MDBRow>
                        </form>
    
                        <hr />
    
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">$4798.00</p>
                        </div>
    
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$20.00</p>
                        </div>
    
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">$4818.00</p>
                        </div>
    
                        <MDBBtn color="info" block size="lg" onClick={() => (window.location.href = "./checkout")}>
                          <div className="d-flex justify-content-between">
                            <span>$4818.00</span>
                            <span >
                              Checkout{" "}
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    );
    }