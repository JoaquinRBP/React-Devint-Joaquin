import React, {useEffect, useState} from 'react';

export const Message = ()=>{

    const [coords, setcoords] = useState({x:0,y:0});
    const {x,y}=coords;
    useEffect(() => {   
        const mouseMove = (e)=>{
            const coords = {x: e.x, y:e.y};
            setcoords(coords);
        }
        window.addEventListener('mousemove',mouseMove);
        //console.log('Componente montado');
    return () => {
        console.log('Componente desmontado');
        window.removeEventListener('mousemove',mouseMove);

        //Para limpieza
    }
    }, [])
    
    return (
        <div>
            <h3>Eres Genial</h3>
            <p>
                X: {x} Y: {y}
            </p>
        </div>
    )
}