import React from "react";
import classes from './MyInput.module.css';

const MyInput = (props) => {

    return (
      <div {...props} className={classes.TextField}>
        <input {...props} className={classes.MyInp} required></input>
        <label {...props} className={classes.MyPlaceholder}>Логин</label>
      </div>
    );
};

export default MyInput;