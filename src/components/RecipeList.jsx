import React from 'react'
import RecipeCard from './RecipeCard'

function RecipeList() {
  return (
    <>
      <div className='mt-14 bg-cta_color text-main-color font-semibold p-4 rounded-lg'>Add recipe</div>
      <RecipeCard />
    </>
  )
}

export default RecipeList