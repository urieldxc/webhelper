import React from 'react'

export const DarkModeSwitch = ({toggleDarkMode}) => {
    return (

        <label htmlFor="check" className='bg-lightStone dark:bg-someWhite px-1 py-1 w-[52px] rounded-full has-[:checked]:pl-6 transition-all'>
            <div className='w-6 h-6 rounded-full bg-white dark:bg-blackEvil'></div>
            <input onClick={toggleDarkMode} id="check" type='checkbox' hidden />
        </label>

    )
}
