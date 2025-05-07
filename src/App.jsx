import { useState } from 'react'
import './App.css'
import MyButton from './components/UI/button/MyButton'
import MyLogin from './components/UI/form/MyLogin'
import MyPassword from './components/UI/form/MyPassword'


function App() {
  const [count, setCount] = useState(0)

  return (
        <div>
          <MyLogin></MyLogin>
          <br></br>
          <MyPassword></MyPassword>
          <MyButton>Войти</MyButton>
        </div>
  )
  
}


export default App 
