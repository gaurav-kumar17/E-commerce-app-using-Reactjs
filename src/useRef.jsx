import { useEffect, useRef, useState } from "react";

const Example=()=>{
    const[text,setText]=useState("");
    const previousInputValue=useRef(""); // it return object

    useEffect(()=>{
        
        // console.log(count.current);
        // count.current+=1;
        // const name=document.getElementById("name");
        // console.log();
        // name.current.style.color="red"
        previousInputValue.current=text;
        console.log(previousInputValue.current);
    },[text])
    // Note:- useEffect return function chalne ke baad chalega
    // ref={name} se pura element ka reference name wale variable mein chala jayega.
    return(
        <>           
            <input id="name" type="text" onChange={(e)=>setText(e.target.value)}></input>
            {/* <h2>{name.current}</h2> */}
            {/* <button onClick={()=>
                // name.current.focus()
                name.current.style.color="red"
            }>Click</button> */}

            <h2>Current Value:{text}</h2>
            <h2>Current Value:{previousInputValue.current}</h2>
            
        </>
    )
}
export default Example;