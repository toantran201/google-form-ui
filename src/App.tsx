import { HomeActionContextProvider } from './context/HomeActionProvider'
import { CustomThemeContextProvider } from './context/CustomThemeProvider/CustomThemeProvider'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/notfound/NotFound'
import MainLayout from './layout/main/MainLayout'
import Home from './pages/home/Home'
import FormDetail from './pages/form-detail/FormDetail'
import { Theme } from './types'

const getInitialTheme = () => {
  if (typeof window !== undefined && window.localStorage) {
    const theme = window.localStorage.getItem('theme')
    if (theme) return theme
  }

  return Theme.PURPLE
}

function App() {
  return (
    <div className={'bg-primary relative'}>
      <HomeActionContextProvider
        initHomeAction={{ isTemplateToggle: false, isOpenSidebar: false }}
      >
        <CustomThemeContextProvider
          initThemeValue={{ isOpen: false, theme: getInitialTheme() }}
        >
          <Routes>
            <Route path={'/'} element={<MainLayout />}>
              <Route path={'/'} element={<Home />} />
              <Route path={'detail'} element={<FormDetail />} />
            </Route>
            <Route path={'*'} element={<NotFound />} />
          </Routes>
        </CustomThemeContextProvider>
      </HomeActionContextProvider>
    </div>
  )
}

export default App
