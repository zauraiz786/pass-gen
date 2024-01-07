import React, { useEffect } from 'react'
import { useState } from 'react'

export default function App() {
    const [length, setLength] = useState(8)
    const [password, setPassword] = useState('')
    const [upperCase, setUpperCase] = useState(true)
    const [lowerCase, setLowerCase] = useState(true)
    const [number, setNumber] = useState(false)
    const [symbol, setSymbol] = useState(false)

    useEffect(()=>{
      generatePass()
    },[length , upperCase , lowerCase , number , symbol])
    function generatePass() {
        let pass = ''
        let str = ''
        if (upperCase) str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (lowerCase) str += 'abcdefghijklmnopqrstuvwxyz';
        if (number) str += '0123456789';
        if (symbol) str += '!@#$%^&*()';
        
        for (let i = 0; i < length; i++) {
         let random = Math.floor(Math.random() * str.length)
         setPassword(pass += str[random])
        }
    }
  return (
    <>
    <div className='bg-indigo-950 shadow-indigo-900 drop-shadow-2xl box-border h-[450px] w-[370px] text-white p-[20px] rounded-lg'>

      <h1 className='text-3xl pb-[12px]'>Password Generator</h1>
      <h2 className='text-2xl bg-slate-600 h-[40px] p-[5px] mt-[8px] rounded-md'>{password}</h2>
    
      <label className='text-indigo-500' htmlFor="length">Password Length: {length}</label>
      <br />
      <input className='w-[327px]' type="range" min={6} max={20} value={length} onChange={(event)=>{setLength(event.target.value)}}/>

      <p className='h-[40px] w-[327px] rounded-md mb-[10px] text-center bg-gray-600 flex p-2 text-lg justify-between'>UpperCase
      <input className='w-[20px]' type="checkbox" checked = {upperCase} onChange={(event)=>{setUpperCase(event.target.checked)}}/>
      </p>

      <p className='h-[50px] w-[327px] rounded-md mb-[10px] text-center bg-gray-600 flex p-2 text-lg justify-between'>LowerCase
      <input className='w-[20px]' type="checkbox" checked = {lowerCase} onChange={(event)=>{setLowerCase(event.target.checked)}}/>
      </p>

      <p className='h-[50px] w-[327px] rounded-md mb-[10px] text-center bg-gray-600 flex p-2 text-lg justify-between'>Number
      <input className='w-[20px]' type="checkbox" checked = {number} onChange={(event)=>{setNumber(event.target.checked)}}/>
      </p>

      <p className='h-[50px] w-[327px] rounded-md mb-[10px] text-center bg-gray-600 flex p-2 text-lg justify-between'>Symbol
      <input className='w-[20px]' type="checkbox" checked = {symbol} onChange={(event)=>{setSymbol(event.target.checked)}}/>
      </p>
      
      <button className='h-[40px] w-[327px] text-center rounded-md text-xl bg-gradient-to-r from-purple-500 to-purple-800' onClick={() => {navigator.clipboard.writeText(password) ;alert('Password Copied')}}>Copy Password</button>
    </div>
    </>
  )
}