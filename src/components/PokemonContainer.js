import Pokemoncard from './PokemonCard';
import React from 'react';

export const PokemonContainer = ({ pokemon }) => {
  const displayPokemon = pokemon.map((poke, index) => {
    return <Pokemoncard 
      {...poke}
      key={index}
  />
  })
  return(
    <div>
      {displayPokemon}
    </div>
  )
}

