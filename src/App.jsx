import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import RecipeEdit from './components/RecipeEdit'
import RecipeFull from './components/RecipeFull'
import RecipeList from './components/RecipeList'
import Login from './components/Login'
import { supabase } from './supabaseClient'

function App() {
  const [session, setSession] = useState(null)
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  return (
    <>
    {!session 
      ? <Login />
      : <Dashboard />}
    {/*<Routes>
      <Route path='login' element={<Login />} />
      <Route path='/' element={<Dashboard />}>
        <Route path='' element ={<RecipeList />} />
        <Route path='add' element={<RecipeEdit />} />
        <Route path='edit' element={<RecipeEdit />} />
        <Route path='id' element={<RecipeFull />} />
      </Route>
    </Routes>*/}
    </>
  )
}

export default App
