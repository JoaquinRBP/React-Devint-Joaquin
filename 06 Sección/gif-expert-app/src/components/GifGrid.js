import React from 'react';
import { GifGridItem } from './GifGridItem';
import {useFetchGifs} from '../hooks/useFetchGifs';
//import React, {useState, useEffect} from 'react';
//import {getGifs} from './../helpers/getGifs';
export const GifGrid = ({category})=>{
    //const [Count,setCount] = useState(0);
    // const [images, setimages] = useState([])
    // useEffect(()=>{
    //     getGifs(category)
    //     .then(setimages)
    // }, [category]) //segundo arreglo es una lista de dependencias
    const {data: imagenes,loading} = useFetchGifs(category)
    
    return (
        <>
        <h3>{category}</h3>
        {loading && <p className="animate__animated animate__flash">Loading</p>}
        <div className="card-grid">
            <ol>{
                imagenes.map(img =>(
                    <GifGridItem 
                    key={img.id}
                    //img={img}
                    {...img}
                    />
                ))}
            </ol>
        </div>
        </>
    )
}