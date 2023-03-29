import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyButton from './pages/MyButton'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MyButton />
    </div>
  )
}

export default App
