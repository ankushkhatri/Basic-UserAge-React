import React from "react";
import classes from "./Card.module.css";


const Card = (props) => {
   // props.children will give the content inside the card component
   // for props.classname check in adduser comment
   return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
