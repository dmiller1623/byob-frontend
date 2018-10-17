import React, { Component } from 'react'
import './trainersSideBar.css'
import Trainers from '../../images/Trainers.png'

class TrainersSideBar extends Component {
  constructor(props) {
    super();
  };

  render() {
    const { trainersTeams, trainers, toggleAddTrainer, deleteTrainer, deletePokemonTeam } = this.props;
    return(
      <div className='side-bar'>
      <img className='trainer-header' alt='trainer title' src={Trainers} />
      <button onClick={toggleAddTrainer}>Add Trainer</button>
      <div>
        {trainers.map((trainer, index) => {
          const foundTeams = trainersTeams.filter((team, index) => {
            return trainer.id === team.trainer_id
          })
          return <div key={index}>
          <div className='name-header'>
            <h2>Name: <span>{trainer.name}</span></h2>
            <h2>Level: <span>{trainer.level}</span></h2>
            <button onClick={() => deleteTrainer(trainer.id)}>delete</button>
          </div>
            {foundTeams.map((pokemon) => {
              return <div>
                <img className='sidebar-images' alt='pokemon' src={pokemon.pokemon_one}/>
                <img className='sidebar-images' alt='pokemon' src={pokemon.pokemon_two}/>
                <img className='sidebar-images' alt='pokemon' src={pokemon.pokemon_three}/>
                <img className='sidebar-images' alt='pokemon' src={pokemon.pokemon_four}/>
                <img className='sidebar-images' alt='pokemon' src={pokemon.pokemon_five}/>
                <button onClick={() => deletePokemonTeam(pokemon.id)}>X</button>
              </div>
            })}
          </div>
        })}
      </div>
    </div>
    )
  }
}

export default TrainersSideBar