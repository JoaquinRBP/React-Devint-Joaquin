import React, { useMemo } from 'react';
import {useParams, Routes,Route, Navigate, useNavigate } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroesById';
export const HeroScreen = () => {
    const {heroId} = useParams();
    const navigate=useNavigate();
    //const hero = getHeroesById(heroId);
    const hero = useMemo(() => getHeroesById(heroId), [heroId]);
    if(!hero){
        return (
            <Routes>
                <Route path='/' element={<Navigate replace to='/'/>} />
            </Routes>
        )
    }
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters} = hero;
    const handleReturn = ()=>{
        if(navigate.length<=1){
            navigate('/',{replace:true})
        }
        else{
            navigate(-1)
        }
    }
return (
    <div className='row mt-5'>
        <div className='col-4'>
            <img src={`..assets/heroes/${heroId}.jpg`}
                alt={superhero}
                className="img-thumbnail animate_animated animate_fadeIn"
            />
            <h3>{superhero}</h3>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'><b>Alter Ego: </b>{alter_ego}</li>
                <li className='list-group-item'><b>Publisher: </b>{publisher}</li>
                <li className='list-group-item'><b>First Appearance: </b>{first_appearance}</li>
            </ul>
            <h5>Characters: </h5>
            {characters}
            <button 
            onClick={handleReturn}
            className='btn btn-outline-info'
            >
                Return
            </button>
        </div>
    </div>
)
}
