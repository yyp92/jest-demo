import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyButton from './pages/MyButton'
// import TodoHeader from './pages/TodoHeader'
import MyForm from './pages/MyForm'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const onClickTitle = useCallback((title: string) => {
    window.alert(title);
  }, []);

  return (
    <div className="App">
      {/* <MyButton /> */}

      {/* <TodoHeader
        title="这是一个标题"
        onClickTitle={onClickTitle}
      /> */}

      <MyForm />
    </div>
  )
}

export default App
