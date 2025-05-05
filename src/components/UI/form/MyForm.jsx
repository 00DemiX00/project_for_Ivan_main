import React from "react";
import classes from './MyForm.module.css';

const MyForm = (props) => {
    return (
      <div>
        <input {...props} className={classes.MyForm}></input>
        <input {...props} className={classes.MyForm}></input>
        <label {...props} className={classes.MyPlaceholder}>Логин</label>
        <label {...props} className={classes.MyPlaceholder}>Пароль</label>
      </div>
    );
};

export default MyForm;