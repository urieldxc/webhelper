import React from 'react'
import { PrimaryButton } from '../others/PrimaryButton'

export const AddWebWrapper = () => {
  return (
    <div className=' bg-purple w-auto h-80 rounded-3xl p-20'>
        <h2 className='text-5xl pb-4'> Add a new web</h2>
        <span className='text-lightStone'>Add a web to have a tracking about it</span>
        <PrimaryButton> Add Web </PrimaryButton>
    </div>
  )
}
