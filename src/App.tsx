import Navbar from './components/Navbar'

function App() {
  const toggleTheme = () => {
    console.log(document.documentElement.dataset)
    document.documentElement.dataset.theme = 'dark'
  }

  return (
    <div className={'bg-primary'}>
      <Navbar />
    </div>
  )
}

export default App
