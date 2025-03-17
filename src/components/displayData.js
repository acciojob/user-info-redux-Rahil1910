import {useSelector} from "react-redux";
import React from "react";

const Display = () =>{
    const {name,email} = useSelector((state)=>state);
    return(
        <>
        <div>
            <label>Name - </label>
            <p className="output">{name}</p>
            <label>Email - </label>
            <p className="output">{email}</p>
        </div>
        </>
    )
}
export default Display;
