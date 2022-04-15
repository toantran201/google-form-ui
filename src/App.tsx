import Navbar from './components/Navbar'
import Home from './pages/home/Home'

function App() {
  const toggleTheme = () => {
    console.log(document.documentElement.dataset)
    document.documentElement.dataset.theme = 'dark'
  }

  return (
    <div className={'bg-primary'}>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
