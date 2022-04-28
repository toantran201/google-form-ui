import Sidebar from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'
import NavbarLayout from '../navbar/NavbarLayout'

const MainLayout = () => {
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
