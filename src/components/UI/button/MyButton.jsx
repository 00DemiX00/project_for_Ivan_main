import React from "react";
import classes from './MyButton.module.css';


const MyButton = (props) => {
    return (
       <div {...props} className={classes.TextField}>
         <button {...props} className={classes.myBtn}></button>
       </div>
    );
};

export default MyButton;