import React, { useMemo } from 'react'
import {HeroCard} from '../heroes/HeroCard';
import {useForm} from '../../hooks/useForm';
import {useNavigate, useSearchParams} from 'react-router-dom';
import { getHeroesbyName } from '../../selectors/getHeroesbyName';
export const SearchScreen = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    let defecto = '';
    if(searchParams.get('q')){
        defecto = searchParams.get('q')
    }
    const [values, handleInputChange] = useForm({
        searchText: defecto
    });
    const {searchText} = values;
    const heroesfiltered = useMemo(() => getHeroesbyName(defecto), [defecto]);

    const handleSearch =(e)=>{
        e.preventDefault();
        localStorage.setItem('query',searchText);
        navigate(`?q=${searchText}`)
    }
return (
    <>
        <h1>SearchScreen</h1>
        <hr />
        <div className="row">
            <div className="col-5">
                <h4>Seacrh Form</h4>
                <hr />
                <form onSubmit={handleSearch}>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Find your hero"
                    name="searchText"
                    value={searchText}
                    onChange={handleInputChange}
                    />
                    <button
                        className="btn btn-primary"
                        type="submit"
                        >
                            Search...
                        </button>
                </form>
            </div>
            <div className="col-7">
                <h4>Result</h4>
                { (defecto==='') && <div className="alert alert-info">
                    Search a Hero
                </div>}
                { (defecto!=='' && heroesfiltered.length===0) && <div className="alert alert-danger">
                    There is no a Hero with {defecto} in the list
                </div>}
                    {
                        heroesfiltered.map( hero =>(
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
            </div>
        </div>
    </>
)
}
