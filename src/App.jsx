import { useState } from 'react'
import './App.css'
import MyButton from './components/UI/button/MyButton'
import MyForm from './components/UI/form/MyForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
        <MyForm></MyForm>
        <br></br>
        <MyButton>Войти</MyButton>
    </div>
    </>
    
  )
  
}


export default App 
