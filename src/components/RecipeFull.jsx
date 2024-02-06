import React from 'react'

function RecipeFull() {
  return (
    <div className='w-full mt-12 py-2'>
          <div className='w-4/5 mx-auto p-4 bg-main-color bg-opacity-50 rounded-lg flex flex-col items-center gap-2'>
            <img className='w-full h-60'/>
            <div className='w-full flex justify-between'>
              <div className='p-2 bg-cta_color font-bold rounded-lg'>Edit</div>
              <div className='p-2 bg-accent-color font-bold rounded-lg'>Delete</div>
            </div>
            <h2 className='text-font-color font-extrabold text-2xl'>Recipe name</h2>
            <h3 className='text-font-color font-bold text-xl self-start'>Ingredients</h3>
            <ul className='self-start'>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
            <h3 className='text-font-color font-bold text-xl self-start'>Prep</h3>
            <ul className='self-start'>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
        </div>
  )
}

export default RecipeFull