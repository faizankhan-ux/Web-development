import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  let [length, setlen] = useState(7)
  let [password, setpass] = useState("Password")
  let [Numbers, setnum] = useState(false)
  let [Characters, setchar] = useState(false)
  let [iscopied , setcopy] = useState(false)

  //ref hook
  let passwordRef = useRef("")

  function GenPassword() {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (Numbers) str += "1234567890"
    if (Characters) str += "!@#$%^&*()_+~<>?|{};:.,";

    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)]
    }

    // console.log('pass=' + pass)
    setpass(pass)
  }

  useEffect(GenPassword, [length, Numbers, Characters])

  function CopyToClipBoard(){
    window.navigator.clipboard.writeText(password)
    passwordRef.current.setSelectionRange(0,`${length}`)
    passwordRef.current.select()
    setcopy(true)

  }


  return (
    <>
      <div className='bg-[#222] w-full h-screen text-white flex items-center justify-center gap-2 flex-col'>
        <h1 className='text-white font-bold text-xl font-mono'>PassWord Generator</h1>
        <div>
          <div className='relative border'>
            <button className='bg-cyan-400 h-10 w-[13%] font-bold text-black rounded-lg absolute top-2 right-1 hover:bg-amber-300 duration-300 cursor-pointer text-sm'
            onClick={CopyToClipBoard}
            >
              
              {iscopied ? 'Copied' : 'Copy'}

            </button>
            <input
              className='bg-white text-orange-400 font-bold m-2 h-10 text-center rounded-lg w-[97%]'
              type="text"
              value={password}
              readOnly
              ref={passwordRef}
            />
          </div>

          <div className='flex items-center justify-center gap-3 bg-[#333] p-2'>
            <input className='h-20 w-40 accent-amber-300 ' type="range" id='l' min={7} max={20} step={1} value={length} onChange={(e) => setlen(Number(e.target.value))} />
            <label htmlFor="l">{length}</label>
            <input type="checkbox" id="cb" onClick={() => setnum(!Numbers)} />
            <label htmlFor="cb" >Numbers</label>

            <input type="checkbox" id="sp" onClick={() => setchar(!Characters)} />
            <label htmlFor="sp">Special charcters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
