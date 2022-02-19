import React, { useState } from 'react';
import '../01-useState/counter.css';
export const CounterApp = ()=>{
    const [state, setstate] = useState({
    //const [{counter1,counter2}, setcounter] = useState(10)
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    });
    const {counter1, counter2} = state;	
    return (
        <>  
            <h1>Counter1 {counter1}</h1>
            <h1>Counter2 {counter2}</h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={()=>{
                    setstate({
                        ...state,
                        counter1: counter1 +1,
                    });
                }}
            >
            +1
            </button>
        </>
    )
}