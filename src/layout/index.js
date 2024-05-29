import React from 'react'
import logo from '../assets/logo1.png'
const AuthLayouts = ({children}) => {
  return (
    <>

      <header className= 'flex justify-center items-center py-4 shadow-md'>
        <img
           src={logo}
           alt = 'logo'
           width ={180}
           height = {60}
           />
      </header>
      { children }
    </>
  )
}

export default AuthLayouts