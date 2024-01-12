import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css' 


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState()

  //useRef hook
  const passwordRef=useRef(null)

  const PasswordGenrater = useCallback(() =>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="123456789"
    if(charAllowed) str +="~!@#$%^&*()_?"

    for(let i=1;i<=length; i++){
      let char= Math.floor(Math.random() *str.length+1)

      pass +=str.charAt(char)

    }

    setPassword(pass)

    

  },[length, numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard=useCallback(() =>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(Password)
  },
  [Password])

  useEffect(() => {
    PasswordGenrater()
  },
  [length, numberAllowed, charAllowed, PasswordGenrater])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-12 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-6 ml-20 mr-20 rounded-full bg-gradient-to-r from-orange-400 via-red-500 to-pink-500'>Password Generator</h1>
        <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
          <input
          type="text"
          value={Password}
          className='outline-none w-5/6 py-1 px-3 mb-2 mr-2 rounded-full'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-sky-500 hover:bg-sky-700 text-white px-3 py-0.5 shrink-0 rounded-lg border-2 inline-block align-baseline'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setlength(e.target.value)}}
            />
            <br/>
            <label>Length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input
            type='checkbox'
            className='cursor-pointer'
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input
            type='checkbox'
            className='cursor-pointer'
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="numberInput">Character</label>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
