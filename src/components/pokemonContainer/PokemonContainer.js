import Pokemoncard from '../pokemonCard/PokemonCard';
import React from 'react';
import './pokemonContainer.css'
import rightArrow from '../../images/right-arrow.svg'
import leftArrow from '../../images/left-arrow.svg'

export const PokemonContainer = ({ 
  pokemon,
  counter,
  increment,
  decrement,
  selectedPokemon,
  addToPokemonTeam,
  deleteFromTeam,
  trainers,
  postTeam,
  getCurrentTrainer
  }) => {
  
  const displayPokemon = pokemon.map((poke, index) => {
    return <Pokemoncard 
      {...poke}
      key={index}
      addToPokemonTeam={addToPokemonTeam}
  />
  })

  return(
    <div className='poke-container'>
      <div className='poke-card-container'>
        <img  alt='left button' className='carousel' src={leftArrow} onClick={() => decrement()}/>
        {displayPokemon[counter]}
        <img  alt='right button' className='carousel' src={rightArrow} onClick={() => increment()}/>
      </div>
      <div className='add-poke-section'>
        <select className='add-poke-buttons' onChange={(e) => getCurrentTrainer(e)}>
          <option>Choose Trainer</option>
          {trainers.map(trainer => {
            return <option key={trainer.id} value={trainer.name}>{trainer.name}</option>
          })}
        </select>
        <button className='add-poke-buttons' onClick={postTeam}>save team</button>
      </div>
      <div className='main-team-display'>
        {selectedPokemon.map((pokemon, index) => {
          return <div>
            <img className='selected-poke' alt='selected pokemon' key={index} onClick={() => deleteFromTeam(index)} src={pokemon}/>
          </div>
        })}
      </div>
      <p className='remove-tag'>Click Icons to Remove</p>
    </div>
  )
}