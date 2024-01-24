import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate()
  return (
    <div>
      <button onClick={()=>navigate("/register")}>Register</button>
      <button></button>
    </div>
  )
}

export default Home
