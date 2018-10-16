import React, { Component } from 'react'

class TrainersSideBar extends Component {
  constructor(props) {
    super();
  };

  render() {
    const { trainersTeams, trainers } = this.props;
    return(
      <div>
        {trainers.map((trainer, index) => {
          const foundTeams = trainersTeams.filter((team, index) => {
            return trainer.id === team.trainer_id
          })
          return <div key={index}>
            <h1>{trainer.name}</h1>
            <h1>{trainer.level}</h1>
            {foundTeams.map((pokemon) => {
              return <div>
                <img src={pokemon.pokemon_one}/>
                <img src={pokemon.pokemon_two}/>
                <img src={pokemon.pokemon_three}/>
                <img src={pokemon.pokemon_four}/>
                <img src={pokemon.pokemon_five}/>
              </div>
            })}
          </div>
        })}
      </div>
    )
  }
}

export default TrainersSideBar