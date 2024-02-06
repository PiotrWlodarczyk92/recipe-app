import React from 'react'

function Main() {
  return (
    <div className="h-screen w-screen bg-[url('./assets/header-background-mobile.jpg')] bg-cover bg-center bg-font-color bg-blend-multiply flex flex-col items-center gap-4">
      <header className='w-full h-12 py-3 bg-main-color'>
          <label className='absolute top-2 left-4 h-8 w-8 flex flex-col justify-center'>
            <input type='checkbox' className='appearance-none flex flex-col justify-around w-8 h-1 bg-font-color content-[""] before:absolute before:-translate-y-2 before:content-[""] before:w-8 before:h-1 before:bg-font-color after:content-[""] after:absolute after:translate-y-2 after:w-8 after:h-1 after:bg-font-color'/>
          </label>
        <nav className='absolute w-full h-full pt-12 px-4 flex flex-col items-center justify-center bg-main-color bg-opacity-50'>
          <ul>
            <li className='text-3xl font-bold py-4'><a href="#about">Settings</a></li>
            <li className='text-3xl font-bold py-4'><a href="#features">Log out</a></li>
          </ul>
        </nav>
      </header>
      <div className='inline bg-cta_color text-main-color font-semibold p-4 rounded-lg'>Add recipe</div>
    </div>
  )
}

export default Main