import React, { Component } from 'react'
import './trainersSideBar.css'
import Trainers from '../../images/Trainers.png'

class TrainersSideBar extends Component {
  constructor(props) {
    super();
  };

  render() {
    const { trainersTeams, trainers } = this.props;
    return(
      <div className='side-bar'>
      <img className='trainer-header' src={Trainers} />
      <div>
        {trainers.map((trainer, index) => {
          const foundTeams = trainersTeams.filter((team, index) => {
            return trainer.id === team.trainer_id
          })
          return <div key={index}>
          <div className='name-header'>
            <h2>Name: <span>{trainer.name}</span></h2>
            <h2>Level: <span>{trainer.level}</span></h2>
          </div>
            {foundTeams.map((pokemon) => {
              return <div>
                <img className='sidebar-images' src={pokemon.pokemon_one}/>
                <img className='sidebar-images' src={pokemon.pokemon_two}/>
                <img className='sidebar-images' src={pokemon.pokemon_three}/>
                <img className='sidebar-images' src={pokemon.pokemon_four}/>
                <img className='sidebar-images' src={pokemon.pokemon_five}/>
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