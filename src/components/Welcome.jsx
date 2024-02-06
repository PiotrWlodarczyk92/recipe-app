import React from 'react'

function Welcome() {
  return (
    <div className="h-screen w-screen p-1 bg-[url('./assets/header-background-mobile.jpg')] bg-cover bg-center bg-font-color bg-blend-multiply flex flex-col items-center justify-center gap-8">
      <h1 className='font-bold text-main-color text-5xl'>Recipe App</h1>
      <h2 className='font-bold text-main-color text-2xl text-center'>Save and share your recipes, anytime, anywhere.</h2>
      <div className='bg-cta_color text-main-color font-semibold p-4 rounded-lg'>Start Now</div>
    </div>
  )
}

export default Welcome