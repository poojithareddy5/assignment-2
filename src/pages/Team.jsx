import React from 'react'
import { useNavigate } from 'react-router-dom'

const Team = () => {
  const Navigate = useNavigate()

  return (
    <section className='dashboard' >
    <div className='container' >
       <h1>Team!</h1>
    <p>Coming soon!</p>
    <button onClick={()=> Navigate('/tickets')} >Check your ticket bin</button>
    </div>
   
    </section>
  )
}

export default Team