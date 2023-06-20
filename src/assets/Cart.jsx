import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export default function Cart(props){
    let total = 0
    const totalPrice = () => {
        props.cartArr.map(item => {
            return total += item.quantity*item.price
        })
    }
    totalPrice()
    return (
        <div className="cartList">
            <h2 className="cartHead">{props.cartArr.length>0 ? 'Your Cart Items' : 'Your cart is empty'}</h2>
            {props.cartArr.map(item => {
                return (
                    <div className="cart" key={item.id}>
                        <img className="cartImg" src={item.image} alt="" />
                        <div className="cartDetails">
                            <div className="cartTitle">{item.title}</div>
                            <div className="cartPrice">$ {item.price}</div>
                        </div>
                        <div className="quantitySection">
                            <button onClick={() => props.handleRemoveClick(item)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => props.handleAddClick(item)}>+</button>
                        </div>
                    </div>
                )
            })}
            {props.cartArr.length>0 && 
            <div className="priceDetails">
                <div className="priceDetailsHead">Price Details:</div>
                {props.cartArr.map((item,index) => {
                    return (
                        <div className="productItems" key={item.id}>   
                            <div>Item {index+1}</div>
                            <div>{item.quantity} X {item.price}</div>
                        </div>
                    )
                })}
                <div className="hrLine"></div>
                <div className="totalText">Total Amount <span>$ {total.toFixed(2)}</span></div>
                <Link to='/checkout' onClick={() => props.clearCheckout()}><button className='checkboxBtn'>Checkout</button></Link>
            </div>}
            
        </div>
    )
}
