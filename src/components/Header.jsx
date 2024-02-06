import React from 'react'

function Header() {
  return (
    <header className='fixed w-full h-12 py-3 bg-main-color'>
          <label className='absolute top-2 left-4 h-8 w-8 flex flex-col justify-center'>
            <input type='checkbox' className='appearance-none flex flex-col justify-around w-8 h-1 bg-font-color content-[""] before:absolute before:-translate-y-2 before:content-[""] before:w-8 before:h-1 before:bg-font-color after:content-[""] after:absolute after:translate-y-2 after:w-8 after:h-1 after:bg-font-color'/>
          </label>
    </header>
  )
}

export default Header