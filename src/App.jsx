import { useState } from 'react'
import './App.css'
import MyButton from './components/UI/button/MyButton'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <form>
        <input type='text' placeholder='Логин'></input>
        <input type='text' placeholder='Пароль'></input>
        <MyButton>Войти</MyButton>
      </form>
    </div>
    </>
  )
}

export default App
