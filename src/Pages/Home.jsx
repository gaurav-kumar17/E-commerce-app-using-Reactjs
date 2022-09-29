import { useEffect, useState } from "react"
import data from "./../Data/products.json";
import ProductCard from "./../ProductCard/ProductCard"

const Home=()=>{

    const[items,setItems]=useState(data);
    const[inputValue,setInputValue]=useState("");

    useEffect(()=>{

    },[]);

    return(
        <>
            <div className="container">
                <div className="row" style={{columnGap:"20px"}}>
                    {items && items.map((item,index)=>{
                        return <ProductCard item={item} key={index}/>
                    })}
                </div>
            </div>
        </>
    )
}
export default Home;