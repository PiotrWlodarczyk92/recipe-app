import './App.css'

function App() {
  return (
    /* WELCOME SCREEN
    <div className="h-screen w-screen bg-[url('./assets/header-background-mobile.jpg')] bg-cover bg-center bg-font-color bg-blend-multiply flex flex-col items-center justify-center gap-8">
      <h1 className='font-bold text-main-color text-5xl'>Recipe App</h1>
      <h2 className='font-bold text-main-color text-2xl text-center'>Save and share your recipes, anytime, anywhere.</h2>
      <div className='bg-cta_color text-main-color font-semibold p-4 rounded-lg'>Start Now</div>
    </div>*/

    /* LOGIN / CREATE ACCOUNT SCREEN
    <div className="h-screen w-screen bg-[url('./assets/header-background-mobile.jpg')] bg-cover bg-center bg-font-color bg-blend-multiply flex flex-col items-center justify-center gap-8">
      <div className='flex flex-col gap-8'>
        <form className='flex flex-col'>
          <label className='font-bold text-main-color text-xl'>E-mail</label>
          <input type='text'></input>
          <label className='font-bold text-main-color text-xl'>Password</label>
          <input type='password'></input>
        </form>
        <div className='bg-cta_color text-main-color font-semibold text-center p-4 rounded-lg'>Log in</div>
        <p className='text-main-color'>Don't have an account? Create one <a className='font-extrabold underline'>here</a></p>
      </div>
    </div>*/

    /* MAIN SCREEN
    <div className="h-screen w-screen bg-[url('./assets/header-background-mobile.jpg')] bg-cover bg-center bg-font-color bg-blend-multiply flex flex-col items-center gap-4">
      <header className='w-full h-12 py-3 bg-main-color'>
          <label className='absolute top-2 left-4 h-8 w-8 flex flex-col justify-center'>
            <input type='checkbox' className='appearance-none flex flex-col justify-around w-8 h-1 bg-font-color content-[""] before:absolute before:-translate-y-2 before:content-[""] before:w-8 before:h-1 before:bg-font-color after:content-[""] after:absolute after:translate-y-2 after:w-8 after:h-1 after:bg-font-color'/>
          </label>
        <nav className='absolute h-full pt-12 px-4 bg-main-color bg-opacity-50'>
          <ul>
            <li><a href="#about">Settings</a></li>
            <li><a href="#features">Log out</a></li>
          </ul>
        </nav>
      </header>
      <div className='inline bg-cta_color text-main-color font-semibold p-4 rounded-lg'>Add recipe</div>
    </div>*/

    /*SINGLE RECIPE*/
    <div className="h-screen w-screen bg-[url('./assets/header-background-mobile.jpg')] bg-cover bg-center bg-font-color bg-blend-multiply flex flex-col items-center gap-4">
      <header className='fixed w-full h-12 py-3 bg-main-color'>
          <label className='absolute top-2 left-4 h-8 w-8 flex flex-col justify-center'>
            <input type='checkbox' className='appearance-none flex flex-col justify-around w-8 h-1 bg-font-color content-[""] before:absolute before:-translate-y-2 before:content-[""] before:w-8 before:h-1 before:bg-font-color after:content-[""] after:absolute after:translate-y-2 after:w-8 after:h-1 after:bg-font-color'/>
          </label>
      </header>
      <div className='w-full h-full mt-12 py-2 flex flex-col items-center gap-4'>
        <div className='inline bg-cta_color text-main-color font-semibold p-4 rounded-lg'>Add recipe</div>
        <div className='w-4/5 h-60 p-4 bg-main-color bg-opacity-50 rounded-lg flex flex-col items-center'>
          <img className='h-4/5'/>
          <h2 className=' text-font-color font-extrabold text-2xl'>Recipe name</h2>
        </div>
      </div>
    </div>

    /*RECIPE VIEW
    <div className="fixed overflow-auto h-screen w-screen bg-[url('./assets/header-background-mobile.jpg')] bg-cover bg-center bg-font-color bg-blend-multiply flex flex-col items-center gap-4">
      <header className='fixed w-full h-12 py-3 bg-main-color'>
          <label className='absolute top-2 left-4 h-8 w-8 flex flex-col justify-center'>
            <input type='checkbox' className='appearance-none flex flex-col justify-around w-8 h-1 bg-font-color content-[""] before:absolute before:-translate-y-2 before:content-[""] before:w-8 before:h-1 before:bg-font-color after:content-[""] after:absolute after:translate-y-2 after:w-8 after:h-1 after:bg-font-color'/>
          </label>
      </header>
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
    </div>*/

    /* ADD/EDIT VIEW
    <div className="fixed overflow-auto h-screen w-screen bg-[url('./assets/header-background-mobile.jpg')] bg-cover bg-center bg-font-color bg-blend-multiply flex flex-col items-center gap-4">
      <header className='fixed w-full h-12 py-3 bg-main-color'>
          <label className='absolute top-2 left-4 h-8 w-8 flex flex-col justify-center'>
            <input type='checkbox' className='appearance-none flex flex-col justify-around w-8 h-1 bg-font-color content-[""] before:absolute before:-translate-y-2 before:content-[""] before:w-8 before:h-1 before:bg-font-color after:content-[""] after:absolute after:translate-y-2 after:w-8 after:h-1 after:bg-font-color'/>
          </label>
      </header>
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
    </div>*/

  )
}

export default App
