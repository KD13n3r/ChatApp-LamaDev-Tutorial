import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Lama Chat</span>
      <div className='user'>
        <img src='https://images.pexels.com/photos/19951472/pexels-photo-19951472/free-photo-of-buck-in-a-snowstorm.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt=''/>
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar