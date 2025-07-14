import { useState } from 'react'
import './App.css'
import MyForm from './components/form/MyForm'


function App() {
  const [count, setCount] = useState(0)
  return (
        <div>
          <MyForm></MyForm>
        </div>
  )
  
}


export default App 
