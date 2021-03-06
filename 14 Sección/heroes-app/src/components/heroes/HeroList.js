import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
    //const heroes = getHeroesByPublisher(publisher);
return (
    <div>
        <div className="card-columns animate_animated animate_fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard
                    key={hero.id}
                        {...hero} 
                    />
                ))
            }
        </div>
    </div>
)
}
