import { useState } from "react";
import "./counter.css"

export const Inventory = () => {
  const [inv, setInv] = useState(3)
  
    // Create add and remove functions here that changes the
    // state.

    const handleChange=(value)=>{
      if(inv<=0 && value<0){
        return
      }
      setInv(inv+value)
    }
  
    const handleChange2=(value)=>{
      if(inv<=0){
        return
      }
      setInv(inv*value)
    }
    


  return (
    <div>
     <h2 className={inv%2==0? "even":"odd"}> count:{inv}</h2>
     
      <button onClick={()=>{handleChange(1)}}>increase</button>
      <button onClick={()=>{handleChange(-1)}} >decrease</button>
      <button onClick={()=>{handleChange2(2)}} >double</button>
    </div>
    // <button className="ifhih"></button>
    
     
  
  );
}
