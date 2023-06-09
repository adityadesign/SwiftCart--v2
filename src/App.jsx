import { useEffect, useState } from "react"
import {Link, Route, Routes} from "react-router-dom"
import ProductListing from "./assets/ProductListing"
import Cart from "./assets/Cart"
import ProductDetails from "./assets/ProductDetails"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function App(){
  const [dataArr, setDataArr] = useState([])
  const [cartArr, setCartArr] = useState([])
  const [product, setProduct] = useState()

  useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setDataArr(data))
  },[])

  function addToCart(product){
    const existingItem = cartArr.find(item => item.id === product.id)
    if(existingItem){
      setCartArr(cartArr.map(item => {
        return item.id===product.id ? {...item, quantity:item.quantity+1} : item
      }))
    } else {
      setCartArr([...cartArr, {...product, quantity : 1}])
    }
  }

  function handleAddClick(product){
    setCartArr(cartArr.map(item => {
      return item.id === product.id ? {...item, quantity : item.quantity + 1} : item
    }))
  }

  function handleRemoveClick(product){
    if(product.quantity>1){
      setCartArr(cartArr.map(item => {
        return item.id === product.id ? {...item, quantity : item.quantity - 1} : item
      }))
    } else {
      setCartArr(cartArr.filter(item => item.id !== product.id))
    }
  }

  function renderProducts(arr){
    return arr.map(item => {
        return (
            <div className="product" key={item.id}>
                <Link to={`/product/${item.id}`} className='productImg' onClick={() => getSelectedProduct(item.id)}>
                  <img src={item.image} alt="" />
                </Link>
                <Link to={`/product/${item.id}`} className='productTitle' onClick={() => getSelectedProduct(item.id)}>
                  <span>{item.title}</span>
                </Link>
                <span className='price'>${item.price}</span>
                <span className='rating'><FontAwesomeIcon icon={faStar} style={{color: "#e6f425",}} /> {item.rating.rate}/5({item.rating.count})</span>
                <Link to='/cart'><button className='addtoCartButton' id={item.id} onClick={()=>addToCart(item)}>Add to cart</button></Link>
            </div>
          )
      })
  }

  function getSelectedProduct(Id){
    setProduct(dataArr.find(item => item.id === Id))
  }
  function handleChange(e){
    if(e.target.value === 'all'){
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setDataArr(data))
    } else {
      fetch(`https://fakestoreapi.com/products/category/${e.target.value}`)
        .then(res => res.json())
        .then(data => setDataArr(data))
    }
  }
  function handleHome(){
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setDataArr(data))
  }
  return (
    <>
      <nav className="navbar">
        <span className="brand">SWIFTCART</span>
        <Link to='/' onClick={handleHome} className="navHome">Home</Link>
        <Link to='/cart' className="navCart">Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductListing dataArr={dataArr} addToCart={addToCart} renderProducts={renderProducts} handleChange={handleChange}/>}/>
        <Route path="/product/:productId" element={<ProductDetails dataArr={dataArr} product={product} addToCart={addToCart}/>}/>
        <Route path="/cart" element={<Cart cartArr={cartArr} handleAddClick={handleAddClick} handleRemoveClick={handleRemoveClick}/>}/>
      </Routes>
    </>
  )
}