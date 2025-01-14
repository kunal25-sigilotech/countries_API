import React, { useState } from 'react'

export default function Header() {
  const [mode,setMode] = useState("light")
  return (
    <div className='flex justify-between w-full max-w-7xl mx-auto py-4 px-12'>
      <p className='font-semibold'>Where in the world?</p> 
      <div>
        <button onClick={()=>setMode(cur=>cur==="light"?"dark":"light")}>
        <span>{mode==="light"?"🌞 Light":"🌚 Dark"}</span>
          </button>
      </div>
    </div>
  )
}
