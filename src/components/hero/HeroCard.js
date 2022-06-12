import React from 'react'
import { Link } from 'react-router-dom'


const heroesImg=require.context('../../assets', true);

export const HeroCard = ({hero}) => {

  //const imagePath=`../../assets/._${hero.id}.jpg`;
  // <img src={`/assets/${id}.jpg`} className="card-img-top" alt={superhero} />
  
  const {id, superhero, first_appearance, publisher, alter_ego, characters }=hero;
  return (
    <div className="card  " style={{width: 'auto' }}>
  
    <img src={heroesImg(`./${id}.jpg`)} className="card-img-top" alt={superhero} />
    <div className="card-body">
      <h5 className="card-title">{superhero}</h5>
      <p className="card-text">{first_appearance}</p>
      <p className="card-text">{publisher}</p>
      <p className="card-text">{alter_ego}</p>
      {
        (alter_ego!==characters)
        && <p className="card-text text-muted">{characters}</p>
      }
      <Link to={`/hero/${id}`} className="btn btn-primary">Ver más</Link>
    </div>
  </div>
   
  )
  /* <div className="card  " style={{width: 'auto' }}>

    <img src={`/assets/${hero.id}.jpg`} className="card-img-top" alt={hero.superhero} />
    <div className="card-body">
      <h5 className="card-title">{hero.superhero}</h5>
      <p className="card-text">{hero.first_appearance}</p>
      <p className="card-text">{hero.publisher}</p>
      <p className="card-text">{hero.alter_ego}</p>
      {
        (hero.alter_ego!==hero.characters)
        && <p className="card-text text-muted">{hero.characters}</p>
      }
      <Link to={`/hero/${hero.id}`} className="btn btn-primary">Ver más</Link>
    </div>
  </div>*/
}
