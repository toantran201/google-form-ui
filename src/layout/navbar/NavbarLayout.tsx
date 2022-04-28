import React from 'react'
import FormNavbar from '../../components/FormNavbar'

const NavbarLayout: React.FC = () => {
  return (
    <nav className={'sticky top-0 left- bg-white z-40'}>
      <FormNavbar />
    </nav>
  )
}

export default NavbarLayout
