import React from 'react'
import { DarkModeSwitch } from './others/DarkModeSwitch'

export const Navbar = ({toggleDarkMode}) => {
  return (
    <div className='flex justify-between h-full items-center md:items-start mx-10 md:my-10'>
      <p className=''>Logo</p>

      <DarkModeSwitch toggleDarkMode={toggleDarkMode}/>
    
    </div>
  )
}
