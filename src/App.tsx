import { HomeActionContextProvider } from './context/HomeActionProvider'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/notfound/NotFound'
import MainLayout from './layout/main/MainLayout'
import Home from './pages/home/Home'
import FormDetail from './pages/form-detail/FormDetail'

function App() {
  return (
    <div className={'bg-primary relative'}>
      <HomeActionContextProvider
        initHomeAction={{ isTemplateToggle: false, isOpenSidebar: false }}
      >
        <Routes>
          <Route path={'/'} element={<MainLayout />}>
            <Route path={'/'} element={<Home />} />
            <Route path={'detail'} element={<FormDetail />} />
          </Route>
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </HomeActionContextProvider>
    </div>
  )
}

export default App
