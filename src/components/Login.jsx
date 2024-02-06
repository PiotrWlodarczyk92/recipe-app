import { useState } from 'react'
import { supabase } from "../supabaseClient"

function Login() {
  const [email, setEmail] = useState('')
  const handleLogin = async (event) => {
    event.preventDefault()
    console.log(email)
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) {
      alert(error.error_description || error.message)
    } else {
      alert('Check your email for the login link!')
    }
  }
  return (
    <div className="h-screen w-screen p-4 bg-[url('./assets/header-background-mobile.jpg')] bg-cover bg-center bg-font-color bg-blend-multiply flex flex-col items-center justify-center gap-8">
      <div className='flex flex-col gap-8'>
        <form className='flex flex-col' onSubmit={handleLogin}>
          <label className='font-bold text-main-color text-xl'>E-mail</label>
          <input type='email' className='h-11 rounded-lg' onChange={(e) => setEmail(e.target.value)}></input>
          <label className='font-bold text-main-color text-xl'>Password</label>
          <input type='password' className='h-11 rounded-lg'></input>
          <button type="submit" className='bg-cta_color text-main-color font-semibold text-center p-4 rounded-lg' >Log in</button>
        </form>
        
        <p className='text-main-color'>Don't have an account? Create one <a className='font-extrabold underline'>here</a></p>
      </div>
    </div>
  )
}

export default Login