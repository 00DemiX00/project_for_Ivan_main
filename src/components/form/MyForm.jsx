import { useState } from "react";
import classes from './MyForm.module.css';
import MyButton from "../UI/button/MyButton";
import axios from "axios";

const MyForm = (props) => {
    //Состояния для хранения значений полей
    const [inputValue, setInputValue] = useState('') //Логин
    const [inputValue1, setInputValue1] = useState('') //Пароль
    //Обаботчик отправки формы
    const handleSubmit = async (e) => {
        e.preventDefault(); //Отключение перезагрузки страницы
        console.log('Логин:', inputValue);
        console.log('Пароль:', inputValue1);
        try {
        //Отправляем GET-запрос на сервер
            const { data } = await axios({
                url: 'https://jsonplaceholder.typicode.com/posts', //пример URL
                headers: { "Content-type": "application/json" },
                params: { login: inputValue, password: inputValue1 }, //передача данных через параметры URL
                method: "GET",
                data: null,
             });
             console.log('Ответ сервера:', data); //вывод ответа в консоль
        } 
        catch (e) {
            console.error('Ошибка при запросе:', e); //обработка ошибок
        }
    };

    return (
        <form onSubmit={handleSubmit} {...props} className={classes.TextField}>
            {/* Поле для логина */}
            <input
                value={inputValue} 
                onChange={e => setInputValue(e.target.value)} //обновление состояния при вводе
                {...props} 
                className={classes.MyInp} 
                required>
            </input>
            <label {...props} className={classes.MyPlaceholder}>Логин</label>
            <br></br><br></br>
            {/* Поле для пароля */}
            <input
                type="password"
                value={inputValue1} 
                onChange={e => setInputValue1(e.target.value)} //обновление состояния при вводе
                {...props} 
                className={classes.MyInp1} 
                required>
            </input>
            <label {...props} className={classes.MyPlaceholder1}>Пароль</label>
            <br></br><br></br>
            {/* Кнопка отправки формы */}
            <MyButton type="submit">Войти</MyButton>
        </form>
    )
}
   

export default MyForm;
    