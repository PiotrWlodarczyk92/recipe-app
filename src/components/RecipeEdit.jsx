import React from 'react'

function RecipeEdit() {
  return (
    <div className='w-full mt-12 py-2'>
        <div className='w-4/5 mx-auto p-4 bg-main-color bg-opacity-50 rounded-lg flex flex-col gap-2'>
          <label>Recipe name</label>
          <input type='text'></input>
          <label>Ingredients</label>
          <textarea></textarea>
          <label>Prep</label>
          <textarea></textarea>
          <input type='file'></input>
          <img className='h-4'></img>
          <div className='p-4 bg-cta_color font-bold rounded-lg self-center'>Save changes</div>
        </div>
      </div>
  )
}

export default RecipeEdit