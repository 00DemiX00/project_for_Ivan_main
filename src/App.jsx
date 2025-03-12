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
        <MyInput type='text' placeholder='Логин'></MyInput>
        <MyInput type='text' placeholder='Пароль'></MyInput>
        <MyButton>Войти</MyButton>
      </form>
    </div>
    </>
  )
}

export default App 
