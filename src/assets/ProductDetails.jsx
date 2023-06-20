import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
import PropTypes from 'prop-types';

export default function ProductDetails(props){
    const details = props.product &&
    (
        <div className="productDetailSection">
            <img className="productDetailImg" src={props.product.image} alt="" />
            <h2>{props.product.title}</h2>
            <div className="productDetailDescription">{props.product.description}</div>
            <div className='productReviewCost'>
                <span><FontAwesomeIcon icon={faStar} style={{color: "#e6f425",}} /> {props.product.rating.rate}/5 ({props.product.rating.count})</span>
                <span className='productDetailPrice'>$ {props.product.price}</span>
            </div>
            <Link className='cartButtonLink' to='/cart'><button className='addtoCartButtonProduct' onClick={()=>props.addToCart(props.product)}>Add to cart</button></Link>
        </div>
    )
    return (
        <div>
            {details}
        </div>
    )
}