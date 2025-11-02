import React from 'react'

export const HeaderComponent = () => {
  return (
    <div className='flex justify-between items-center pt-8 pb-8 pr-5 pl-5'>
        <div className='flex items-center'>
            <i class="fa-solid fa-arrow-left"></i>
            <p>Overview Page</p>
        </div>
        <div className='flex gap-5'>
            <i class="fa-solid fa-laptop"></i>
            <i class="fa-solid fa-tablet-screen-button"></i>
            <i class="fa-solid fa-tablet-button"></i>
        </div>
        <div className='flex items-center'> 
            <i class="fa-brands fa-github"></i>
            <button><i class="fa-solid fa-download"></i>Free Download</button>
            <i class="fa-solid fa-x"></i>
        </div>
    </div>
  )
}
