import React, { useMemo, useState } from 'react';
import {useCounter} from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import { procesoPesado } from '../../helpers/procesoPesado';
export const MemoHook = () => {
    const {counter, increment} = useCounter(1000);
    const [show, setshow] = useState(true);

    
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])
return (
    <div>
        <h1>MemoHook</h1>
        <h3>Counter <small>{counter}</small></h3>
        <hr />

        <p>{memoProcesoPesado}</p>
        <button 
        className="btn btn-primary"
        onClick={increment}
        >
            +1
        </button>
        <button
        className="btn btn-primary"
        onClick={ ()=>{
            setshow(!show);
        }}
        >
            Show/Hide {JSON.stringify(show)}
        </button>
    </div>
)
}
