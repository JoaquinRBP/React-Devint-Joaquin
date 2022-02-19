import React, {useRef, useState}from 'react';
import '../02-useEffect/effects.css';
import {MultipleCustomHooks} from '../03-Examples/MultipleCustomHooks';
export const RealExampleRef =()=>{
    const [show, setshow] = useState(false);

    return(
        <>
            <h1>RealExampleRef</h1>
            <hr />

            {show && <MultipleCustomHooks />}
            <button 
            className="btn btn-primary mt-5"
            onClick={()=>{
                setshow(!show);
            }}
            >Show/Hide</button>
        </>
    )
}