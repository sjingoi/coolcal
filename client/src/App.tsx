import { useState } from 'react'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import './app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{height: '100vh'}}>
      <Sidebar/>
      <MainContent/>
    </div>
  )
}

export default App
