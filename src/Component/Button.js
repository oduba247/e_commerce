import React from 'react'
import '../Style/Button.css'
import { data } from './db'

const Button = ({list,setList,data}) => {
  function handleSort(filteredCatigory){
    let singleCategory = data.filter((fiteredlist) => fiteredlist.category  === filteredCatigory)
    setList(singleCategory)
  }
  return (
    <div className='button'>
        <button onClick={()=> handleSort("men's clothing")}>Men</button>
        <button onClick={()=> handleSort("women's clothing")}>Women</button>
        <button  onClick={()=> handleSort("jewelery")}>Jewelry</button>
        <button  onClick={()=> handleSort("electronics")}>Electronics</button>
      <button onClick={()=> setList(data)}>All</button>

    </div>
  )
}

export default Button