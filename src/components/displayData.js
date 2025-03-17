import {useSelector} from "react-redux";
import React from "react";

const Display = () =>{
    const {name,email} = useSelector((state)=>state);
    return(
        <>
        <div>
            <label>Name: </label>
            <p>{name}</p>
            <label>Email:</label>
            <p>{email}</p>
        </div>
        </>
    )
}
export default Display;
