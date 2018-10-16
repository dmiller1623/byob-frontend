import React from 'react'
import './header.css'
import header from '../../images/header.png'

export const Header = () => {
  return (
    <div className='header'>
      <img className='header-img' alt='header image' src={header}/>
    </div>
  )
}