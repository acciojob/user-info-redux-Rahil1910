import {useSelector} from "react-redux";
import React from "react";
import styles from "./display.module.css";

const Display = () =>{
    const {name,email} = useSelector((state)=>state);
    return(
        <>
        <div>
            <label>Name - </label>
            <p className={styles.output}>{name}</p>
            <br></br>
            <label>Email - </label>
            <p className={styles.output}>{email}</p>
        </div>
        </>
    )
}
export default Display;
