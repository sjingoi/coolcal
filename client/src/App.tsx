import { useState } from 'react'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainContent/>
      <Sidebar/>
    </>
  )
}

export default App
