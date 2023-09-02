import { useState } from 'react'

import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState('')
  return (
    <>
     <h1>Password Generetor</h1>
    </>
  )
}

export default App
