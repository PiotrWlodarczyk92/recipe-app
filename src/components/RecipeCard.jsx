import React from 'react'

function RecipeCard() {
  return (
    <div className='w-4/5 h-60 p-4 bg-main-color bg-opacity-50 rounded-lg flex flex-col items-center'>
        <img className='h-4/5'/>
        <h2 className=' text-font-color font-extrabold text-2xl'>Recipe name</h2>
    </div>
  )
}

export default RecipeCard