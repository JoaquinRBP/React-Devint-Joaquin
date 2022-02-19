import React, {useEffect} from 'react';
import './effects.css';
import {useForm} from '../../hooks/useForm';
export const FormWithCustomHook = ()=>{

    //No se puede tener un Hook dentro de una condicional
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    })
    const {name, email,password} = formValues;

    useEffect( ()=>{
        console.log('Email cambió')
    }, [email]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formValues)
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr />

            <div className="form-group">
                <input type="text" 
                name="name"
                className="form-control"
                placeholder="Tu Nombre"
                value={name}
                onChange={handleInputChange}
                />
            </div>
            <div>
                <input type="text" 
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                value={email}
                onChange={handleInputChange}
                />
            </div>
            <div>
                <input type="password   " 
                name="password"
                className="form-control"
                placeholder="****"
                value={password}
                onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    )
}