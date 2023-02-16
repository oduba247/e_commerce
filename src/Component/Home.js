import React, { useState } from 'react'
import { data } from './db'
import Product from './Product'

const Home = ({cartItems,setCartItems}) => {
    const [list,setList] = useState(data)
  return (
    <div>
        <Product list={list} setList ={setList} data={data} cartItems ={cartItems} setCartItems={setCartItems}/>
    </div>
  )
}

export default Home