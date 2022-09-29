import { useEffect, useRef, useState } from "react";

const Example=()=>{
    const[text,setText]=useState("");
    const count=useRef(0); // it return object

    useEffect(()=>{
        
        count.current+=1;
        console.log(count.current);
    })
    // Note:- useeffect return function chalne ke baad chalega
    return(
        <>
            <input type="text" onChange={(e)=>setText(e.target.value)}></input>
            <h2>{text}</h2>
        </>
    )
}
export default Example;