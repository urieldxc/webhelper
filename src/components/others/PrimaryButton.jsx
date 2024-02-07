import React from 'react'

export const PrimaryButton = ({children}) => {
  return (
    <div>
        <button className='bg-blackEvil text-white py-2 px-4 rounded-2xl text-xl mt-4'>
            {children}
        </button>
    </div>
  )
}
