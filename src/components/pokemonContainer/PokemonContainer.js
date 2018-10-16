import Pokemoncard from '../pokemonCard/PokemonCard';
import React from 'react';
import './pokemonContainer.css'

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
      <button onClick={() => decrement()}>Previous</button>
      {displayPokemon[counter]}
      <button onClick={() => increment()}>Next</button>
      {selectedPokemon.map((pokemon, index) => {
        return <div>
          <img key={index} onClick={() => deleteFromTeam(index)} src={pokemon}/>
        </div>
      })}
      <button onClick={postTeam}>save team</button>
      <select onChange={(e) => getCurrentTrainer(e)}>
        <option selected>Choose Trainer</option>
        {trainers.map(trainer => {
          return <option key={trainer.id} value={trainer.name}>{trainer.name}</option>
        })}
      </select>
    </div>
  )
}