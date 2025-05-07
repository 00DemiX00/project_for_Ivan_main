import React from "react";
import classes from './MyPassword.module.css';

const MyPassword = (props) => {
    return (
      <div {...props} className={classes.TextField}>
        <input {...props} className={classes.MyInput} required></input>
        <label {...props} className={classes.MyPlaceholder}>Пароль</label>
      </div>
    );
};

export default MyPassword;