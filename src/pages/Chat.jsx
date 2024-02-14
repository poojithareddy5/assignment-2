import React from 'react'
import {  useNavigate } from 'react-router-dom'

const Chat = () => {
  const Navigate = useNavigate()

  return (
    <section className='dashboard' >
    <div className='container' >
       <h1>Chats!</h1>
    <p>Coming soon!</p>
    <button onClick={()=> Navigate('/tickets')} >Check your ticket bin</button>
    </div>
   
    </section>
  )
}

export default Chat