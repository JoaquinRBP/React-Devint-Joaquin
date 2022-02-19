import React from 'react';
import { useEffect, useState } from 'react';
import {Message} from './Message';
import './effects.css';
export const SimpleForm = ()=>{

    //No se puede tener un Hook dentro de una condicional
    const [Formstate, setFormState] = useState({
        name: '',
        email: ''
    })
    const {name, email} = Formstate;
    useEffect( ()=>{ 
       // console.log('Hey')
    },[]); //Trabajar efectos de manera individual
    useEffect( ()=>{ 
        //console.log('Cambio de Formulario');
    },[Formstate]);
    useEffect( ()=>{ 
        //console.log('Cambio el email');
    },[email]);
    const handleInputChange = ({target})=>{
        setFormState({
            ...Formstate,
            [target.name]:target.value
        });
    }
    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input type="text" 
                name="name"
                className="form-control"
                placeholder="Tu Nombre"
                value={name}
                onChange={handleInputChange}
                />
                <input type="text" 
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                value={email}
                onChange={handleInputChange}
                />
                {name==='123' && <Message />}
            </div>
        </>
    )
}