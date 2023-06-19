import { Link } from "react-router-dom";

export default function Checkout(){
    return (
        <div className="checkout">
            <h2>Order Summary</h2>
            <img className="checkoutImg" src='../public/checkout.png' alt="" />
            <h3>Thank you, your order has been placed.</h3>
            <p>Your order has been successfully completed. Within moments you will receive a notification with the receipt of your purchase and track every step of your order.</p>
            <Link to='/'><button>Go to Home</button></Link>
        </div>
    )
}