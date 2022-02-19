import React, {useLayoutEffect,useRef, useState} from 'react';
import './layout.css';
import {useFetch} from '../../hooks/useFetch';
import {useCounter} from '../../hooks/useCounter';
export const Layout =()=>{
    const {counter, increment} = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {quote} = !!data&&data[0];
    const ptag = useRef();
    const [boxSize, setboxSize] = useState({})
    useLayoutEffect(()=>{
        setboxSize(ptag.current.getBoundingClientRect());
    },[quote])
    return (
        <>
            <h1>LayoutEffect</h1>
            
            <blockquote className="blockquote text-right">
                <a 
                href="#a"
                className="mb-0"
                ref={ptag}>
                {quote}</a>
            </blockquote>
            <pre>
                {JSON.stringify(boxSize,null,3)}
            </pre>
            <button 
            className="btn btn-primary"
            onClick={increment}> Siguiente Autor</button>
        </>
    )
}