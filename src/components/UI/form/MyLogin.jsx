import React from "react";
import classes from './MyLogin.module.css';

const MyLogin = (props) => {
    return (
      <div {...props} className={classes.TextField}>
        <input {...props} className={classes.MyInput} required></input>
        <label {...props} className={classes.MyPlaceholder}>Логин</label>
      </div>
    );
};

export default MyLogin;