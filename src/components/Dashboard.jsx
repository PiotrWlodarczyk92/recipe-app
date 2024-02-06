import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="h-screen w-screen bg-[url('./assets/header-background-mobile.jpg')] bg-cover bg-center bg-font-color bg-blend-multiply flex flex-col items-center gap-4">
        <Header />
        <Outlet />
    </div>
  )
}

export default Dashboard