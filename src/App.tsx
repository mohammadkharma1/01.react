import { useState } from 'react'
 
import './App.css'
import Card from './Card'
 
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    <h1>Willkommen</h1>
    <Card />
    <Card />
    <Card />
    <Card />
    </>
  )
}
 
export default App