import React, { useState } from "react";
import classes from './MyForm.module.css';
import MyButton from "../UI/button/MyButton";
import axios from "axios";

const MyForm = (props) => {
    const [inputValue, setInputValue] = useState()
    const [inputValue1, setInputValue1] = useState()

    return (
        <div {...props} className={classes.TextField}>
            <input value={inputValue} onChange={e => setInputValue(e.target.value)} {...props} className={classes.MyInp} required></input>
            <label {...props} className={classes.MyPlaceholder}>Логин</label>
            <br></br><br></br>
            <input value={inputValue1} onChange={e => setInputValue1(e.target.value)} {...props} className={classes.MyInp1} required></input>
            <label {...props} className={classes.MyPlaceholder1}>Пароль</label>
            <br></br><br></br>
            <MyButton
                onClick={async () => 
                    {console.log(inputValue, inputValue1);
                        try {
                            await axios({
                            url: `https://jsonplaceholder.typicode.com/`,
                            headers: {"Content-type": "application/json"},
                            params: {inputValue, inputValue1},
                            method: "GET",
                            data: null
                        }).then(({data}) => {
                            return data;});
                        } 
                        catch (e) {
                            console.log('ERROR', e)
                        }
                        
                    }}>
            Войти</MyButton>
        </div>
    );
};

export default MyForm;