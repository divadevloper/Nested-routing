import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <div className='sidenav'>
        <Link className='text-light d-block p-4' to="/"> Profile</Link>
        <Link className='text-light d-block p-4' to="/home"> Home</Link>
        <Link className='text-light d-block p-4' to="/playlist"> Your PlayList</Link>
        <Link className='text-light d-block p-4' to="/setting"> Setting</Link>
    </div>

  )
}

export default SideNav