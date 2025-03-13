import { useState } from 'react'
import './App.css'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
       <form>
        <MyInput></MyInput>
        <MyButton>Войти</MyButton>
      </form>
    </div>
    </>
    
  )
  
}


export default App 
