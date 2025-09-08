import React, { useState } from 'react'
import '../App.css'
import { Link } from "react-router-dom"

const Nav = ({ onValueChange }) => {

  let [EnteredValue, setEnteredValue] = useState("")

  function handelclick() {
    // setEnteredValue(e.target.value)
    onValueChange(EnteredValue)
  }

  return (
    <div className='h-[3rem] w-full text-white bg-[#393E46] font-bold flex items-center justify-between '>
      <h1 className='text-yellow-300 text-xl mx-5 font-sans'>Movie Search</h1>

      <div className="search bg-white flex w-[30%] relative mx-5 overflow-hidden rounded-sm " >
        <input className='bg-whte w-[100%] rounded-sm text-black text-center' type="text" placeholder='Seacrh for movies'
          value={EnteredValue}
          onChange={(e) => setEnteredValue(e.target.value)}
        />
        <button onClick={handelclick} className='bg-purple-400 text-black absolute top-0 right-0 px-1 cursor-pointer'>Search</button>
      </div>

      <div className="nav-right flex gap-10 mx-10">
        <Link to="/">Home</Link>
        <Link to="/Favorites">Favorites</Link>
      </div>
    </div>
  )
}

export default Nav