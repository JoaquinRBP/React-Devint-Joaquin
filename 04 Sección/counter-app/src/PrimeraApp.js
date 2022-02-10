//FC -> Funcional Component
//import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
const PrimeraApp = ( {saludo, subtitulo} )=>{
    //Fragment es importación independiente
    //Se usa a discrecion de la persona
    //<Fragment></Fragment> = <></>
    //const saludo = 'Revisa Pussy Destroyer';
    //const objeto = {
    //    nombre: 'PussyDestroyer'
    //}
    //No se puede imprimir objetos de manera directa
    //Se tiene que transformar con Json.objeto
    
    return (
    <>
        <h1>Hola Arzapalo</h1>
        <p>{saludo}</p>
        <p>{subtitulo}</p>
        {/* <p>{JSON.stringify(objeto,null,2)}</p> */}
    </>
    );
    //En HTML no imprime booleanos, y los array clos concatena
    PrimeraApp.propTypes = {
        saludo: PropTypes.number.isRequired,
        subtitulo: PropTypes.string.isRequired,
    }
    PrimeraApp.defaultProps = {
        subtitulo:"Soy un subttulo",
    }
}
export default PrimeraApp;