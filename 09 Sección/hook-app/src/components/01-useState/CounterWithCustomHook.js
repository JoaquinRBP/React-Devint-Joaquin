import React from 'react';
import './counter.css';
import {useCounter} from '../../hooks/useCounter';
export const CounterWithCustomHook = ()=>{
    const {state, increment, decrement,reset} = useCounter(100);
    return (
        <>
            <p>Custom  with Hook: {state}</p>
            <hr />
            <button onClick={()=>increment(2)} className="btn">+ 2</button>
            <button onClick={reset} className="btn">Reset</button>
            <button onClick={()=>decrement(2)} className="btn">- 2</button>
        </>
    )
}