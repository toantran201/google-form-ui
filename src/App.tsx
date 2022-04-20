import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import { HomeActionContextProvider } from './context/HomeActionProvider'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className={'bg-primary relative'}>
      <HomeActionContextProvider initHomeAction={{ isTemplateToggle: false }}>
        <Sidebar />
        <Navbar />
        <Home />
      </HomeActionContextProvider>
    </div>
  )
}

export default App
