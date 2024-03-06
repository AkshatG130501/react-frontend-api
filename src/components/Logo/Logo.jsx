import React from 'react'
import logo from '../../assets/logo.png'

const Logo = ({width = '100px'}) => {
  return (
    <div className='mt-2'>
        <img src={logo} />
    </div>
  )
}

export default Logo