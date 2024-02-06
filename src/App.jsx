import { useState } from 'react'
import { Navbar } from './components/Navbar.jsx'
import { Dashboard } from './components/Dashboard.jsx'

function App() {
  const [count, setCount] = useState(0)

  const toggleDarkMode = () => document.body.classList.toggle("dark");

  return (
    <div className='flex flex-col md:flex-row text-blackEvil dark:text-white'>
      <div className='w-full h-24 md:w-80 md:h-screen border-lightStone dark:border-someWhite border-b-2 md:border-r-2  dark:bg-blackEvil'>
        <Navbar darkMode={toggleDarkMode}/> 
      </div>
      <div className=' dark:bg-blackEvil w-full h-screen'>
        <Dashboard />
      </div>
    </div>
  )
}

export default App
