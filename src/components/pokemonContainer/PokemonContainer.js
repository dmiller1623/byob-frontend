import Pokemoncard from '../pokemonCard/PokemonCard';
import React from 'react';
import './pokemonContainer.css'
let counter = 0

export const PokemonContainer = ({ pokemon, counter, increment, decrement }) => {
  
  const displayPokemon = pokemon.map((poke, index) => {
    return <Pokemoncard 
      {...poke}
      key={index}
  />
  })

  return(
    <div className='poke-container'>
      <button onClick={() => decrement()}>Previous</button>
      {displayPokemon[counter]}
      <button onClick={() => increment()}>Next</button>
    </div>
  )
}