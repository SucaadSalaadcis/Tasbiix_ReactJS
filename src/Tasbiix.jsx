import React from "react";
import { useState } from "react";
function Hero() {
    const [startV, setStartV] = useState(0)
   
    
    const inc = ()=> {
       setStartV(startV +1);

    }
    const dec = ()=> {
        if(startV > 0){
        setStartV(startV -1)
        }
     }

     const reset = () => {
        setStartV(0);
     }
 



  return (
    <div>
      <div className="text-center mt-32">
        <h1 className="text-9xl"  style={{color: startV == 10 ? "red" : "black"}} >{startV}</h1>
        <button
          id="inc"
          onClick={inc}
          className="border-2 border-rose-500 text-4xl p-4 rounded-xl hover:bg-sky-200 mt-20"
        >
          Increment
        </button>
        <button
          id="dec"
          onClick={dec}
          className="border-2 border-lime-500 text-4xl p-4 rounded-xl hover:bg-orange-300 "
        >
          Decrement
        </button>
        <button
          id="reset"
          onClick={reset}
          className="border-2 border-blue-500 text-4xl p-4 rounded-xl hover:bg-pink-300 "
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Hero;
