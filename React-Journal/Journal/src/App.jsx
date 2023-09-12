import { useState } from 'react'
import './App.css'
import './index.css'
import { Header } from './components/Header'
import { Main } from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
     <Main/>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
    </>
  )
}

export default App
