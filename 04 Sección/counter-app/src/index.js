import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
import './index.css';

const divRoot=document.querySelector('#root');
//PrimeraApp -> Es un Componente
ReactDOM.render(<CounterApp value={10}/> , divRoot)