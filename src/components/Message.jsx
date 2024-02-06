import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const Message = ({message}) => {

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img 
        src=
        alt=''
        /> 
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>hello</p>
        <img src='https://images.pexels.com/photos/19951472/pexels-photo-19951472/free-photo-of-buck-in-a-snowstorm.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt=''/>
      </div>
    </div>
  )
}

export default Message