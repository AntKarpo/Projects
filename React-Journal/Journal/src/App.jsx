import { useState } from 'react'
import './App.css'
import './index.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
     <Main/>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          All entries {count}
        </button>
        
      </div>
    </>
  )
}

export default App
