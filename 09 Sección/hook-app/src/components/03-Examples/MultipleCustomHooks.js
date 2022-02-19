import React from 'react';
import '../02-useEffect/effects.css';
import {useFetch} from '../../hooks/useFetch';
import {useCounter} from '../../hooks/useCounter';
export const MultipleCustomHooks =()=>{
    const {counter, increment} = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data&&data[0];
    return (
        <>
            <h1>Custom Hooks</h1>
            
            {loading
            ? (<div className="alert alert-infor text-center">
                Loading...
            </div>)
            :(
                <blockquote className="blockquote text-right">
                <a className="mb-0">{quote}</a>
                <footer className="blockqueote-footer">
                    {author}
                </footer>
            </blockquote>
            )
            }
            <button 
            className="btn btn-primary"
            onClick={increment}> Siguiente Autor</button>
        </>
    )
}