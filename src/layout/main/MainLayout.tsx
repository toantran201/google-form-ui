import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
