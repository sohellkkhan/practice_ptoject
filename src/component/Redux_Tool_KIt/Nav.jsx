import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Nav = () => {

    const items=useSelector((state)=>state.cart)
  return (
    <div>
          <ul className="flex flex-wrap items-center text-white justify-between  bg-black p-6">
        <h1 className="text-xl font-bold ">Apna Dukan</h1>
        <Link className="font-bold hover:text-orange-400 duration-500" to="/">Home</Link>
        {/* <Link className="font-bold hover:text-orange-400 duration-500" to="/product">Product</Link> */}
        <Link className="font-bold hover:text-orange-400 duration-500"  to="/cart">Cart
        <span> : {items.length}</span></Link>
        <Link to="">Pages</Link>
        <Link to="">Women</Link>
        <Link to="">Men</Link>
        <Link to="">Kids</Link>
      </ul>
    </div>
  )
}

export default Nav
