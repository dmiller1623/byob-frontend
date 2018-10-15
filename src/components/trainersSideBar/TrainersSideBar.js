import React, { Component } from 'react'
import { getTrainers, getPokemonTeams } from '../../utilities/backendApiCalls/apiCalls'

class TrainersSideBar extends Component {
  constructor() {
    super();
    this.state = {
      trainers: [],
      pokemon: []
    }
  };

  componentDidMount = async () => {
    const trainers = await getTrainers();
    const pokemon = await getPokemonTeams();
    this.setState({
      trainers,
      pokemon
    });
  };

  render() {
    return(
      <div>
        {this.state.trainers.map((trainer, index) => {
          const foundTeams = this.state.pokemon.filter((team, index) => {
            return trainer.id === team.trainer_id
          })
          return <div key={index}>
            <h1>{trainer.name}</h1>
            <h1>{trainer.level}</h1>
            {foundTeams.map((pokemon) => {
              return <div>
                <h1>{pokemon.pokemon_one}</h1>
                <h1>{pokemon.pokemon_two}</h1>
                <h1>{pokemon.pokemon_three}</h1>
                <h1>{pokemon.pokemon_four}</h1>
                <h1>{pokemon.pokemon_five}</h1>
              </div>
            })}
          </div>
        })}
      </div>
    )
  }
}

export default TrainersSideBar