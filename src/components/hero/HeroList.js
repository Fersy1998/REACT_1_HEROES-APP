import React, { useMemo } from 'react'
import { getElementByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';
export const HeroList = ({publisher}) => {
    const heroes=useMemo(()=> getElementByPublisher(publisher), [publisher]);
    const validPublishers=['DC Comics', 'Marvel Comics']
    if(!validPublishers.includes(publisher)){
      throw new Error(`${publisher } is not a valid Publisher`);
    }
    //console.log(heroes);
  return (
    <div className='row '>
     <h1>Hero List - {publisher}</h1><hr />
    {
        heroes.map(hero=>(<div className='col col-3 animate__animated animate__backInLeft' key={hero.id}><HeroCard hero={hero} /></div>))
        
    }
    </div>
  )
}
