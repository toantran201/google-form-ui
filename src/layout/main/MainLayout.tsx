import Sidebar from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'
import NavbarLayout from '../navbar/NavbarLayout'
import React from 'react'

const MainLayout: React.FC = () => {
  return (
    <>
      <Sidebar />
      <NavbarLayout />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
