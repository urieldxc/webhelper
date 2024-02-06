import React from 'react'

export const Navbar = ({darkMode}) => {
  return (
    <div className='flex justify-between h-full items-center md:items-start mx-10 md:my-10'>
      <p className=''>Logo</p>

    <label for="check" className='bg-lightStone dark:bg-someWhite px-1 py-1 w-[52px] rounded-full has-[:checked]:pl-6 transition-all'>
      <div className='w-6 h-6 rounded-full bg-white dark:bg-blackEvil'></div>
      <input onClick={darkMode} id="check" type='checkbox' hidden/>
    </label>
    </div>
  )
}
