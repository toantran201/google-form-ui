import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import { HomeActionContextProvider } from './context/HomeActionProvider'

function App() {
  return (
    <div className={'bg-primary'}>
      <HomeActionContextProvider initHomeAction={{ isTemplateToggle: false }}>
        <Navbar />
        <Home />
      </HomeActionContextProvider>
    </div>
  )
}

export default App
