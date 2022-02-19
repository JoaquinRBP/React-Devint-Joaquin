import React, {useRef}from 'react';
import '../02-useEffect/effects.css';
export const FocusScreen =()=>{
    //para usar una referencia mutable
    const inputref = useRef();
    const handleClick = ()=>{
        inputref.current.select();
    }
    return(
        <>
            <h1>FocusScreen</h1>
            <hr />

            <input 
            ref={inputref}
            className="form-control"
            placeholder="Su nombre"
            />

            <button 
            onClick={handleClick}
            className="btn btn-outline-primary mt-5">
                Focus
            </button>
        </>
    )
}