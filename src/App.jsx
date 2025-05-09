import { useState } from 'react'
import './App.css'
import MyInput from './components/UI/input/MyInput'
import MyButton from './components/UI/button/MyButton'
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
