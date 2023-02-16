import React from 'react'
import '../Style/Cart.css'

  const Cart = ({ cartItems, setCartItems }) => {
    const totalPrice = cartItems.reduce((price,item)=>price + item.quantity * item.price,0)
    function handleIncrease(product) {
        const productSelected = cartItems.find(
          (singleCart) => singleCart.id === product.id
        )
        if (productSelected) {
          setCartItems(
            cartItems.map((oneItem) =>
              oneItem.id === product.id
                ? { ...productSelected, quantity: productSelected.quantity + 1 }
                : oneItem
            )
          )
        } else {
          setCartItems([...cartItems, { ...product, quantity: 1 }])
        }
      
    }
    function handleDecrease(product) {
      const productSelected = cartItems.find(
        (singleCart) => singleCart.id === product.id
      )
      if (productSelected.quantity === 1) {
        setCartItems(cartItems.filter((oneItem) => oneItem.id !== product.id))
      } else {
        setCartItems(
          cartItems.map((sItem) =>
            sItem.id === product.id
              ? { ...productSelected, quantity: productSelected.quantity - 1 }
              : sItem
          )
        )
      }
    }


  return (
    <div className='cart-items'>
      <div className='cart-items-header'>
        <h2>Cart Items</h2>
        {cartItems.length === 0 && (
          <div className='cart-items-empty'>
            <h3>No items in the cart</h3>
          </div>
        )}
      </div>
      <div>
        {cartItems.map((item) => {
          const { image, id, title, price, quantity } = item
          return (
            <div key={id} className='cart-items-list'>
              <img className='cart-items-image' src={image} alt='' />
              <div className='cart-items-name'>
                <h2> {title.slice(0, 25)} </h2>
              </div>
              <div className='cart-items-function'>
                <button
                  className='cart-items-add'
                  onClick={() => handleIncrease(item)}
                >
                  inc
                </button>
                <button
                  className='cart-items-remove'
                  onClick={() => handleDecrease(item)}
                >
                  Dec
                </button>
              </div>
              <div className='cart-items-price'>
                <h4>
                  {quantity} * {price}
                </h4>
              </div>
            </div>
          )
        })}
      </div>
      {cartItems.length >= 1 && (
        <div>
          <button
            style={{
              backgroundColor: 'red',
              color: 'white',
              width: '10rem',
              fontSize: '30px',
              borderRadius: '10px',
            }}
            onClick={() => setCartItems([])}
          >
            
            {cartItems.length === 1 ? 'clear item' : 'clear all'}
          </button>
        </div>
      )}
      <div className='cart-items-total-price-name'>
        Total Price
        <div className="cart-items-total-price">
          #{totalPrice}

        </div>
      </div>
    </div>
  )
}

export default Cart