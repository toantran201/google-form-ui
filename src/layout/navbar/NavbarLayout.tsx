import React, { ReactNode } from 'react'
import FormNavbar from '../../components/FormNavbar'
import { useLocation } from 'react-router-dom'
import HomeNavbar from '../../components/HomeNavbar'

const NavbarLayout: React.FC = () => {
  const location = useLocation()
  console.log(location)

  const renderNavbar = (): ReactNode => {
    if (location.pathname.includes('detail')) return <FormNavbar />
    return <HomeNavbar />
  }
  return (
    <nav className={'sticky top-0 left- bg-white z-40'}>{renderNavbar()}</nav>
  )
}

export default NavbarLayout
