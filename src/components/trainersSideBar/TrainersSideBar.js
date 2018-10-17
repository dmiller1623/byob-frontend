import React, { Component } from 'react';
import './trainersSideBar.css';
import Trainers from '../../images/Trainers.png';
import Delete from '../../images/delete.svg';
import PropTypes from 'prop-types';


class TrainersSideBar extends Component {
  constructor() {
    super();
  }

  render() {
    const { trainersTeams, trainers, toggleAddTrainer, deleteTrainer, deletePokemonTeam } = this.props;
    return (
      <div className='side-bar'>
        <img className='trainer-header' alt='trainer title' src={Trainers} />
        <button onClick={toggleAddTrainer}>Add Trainer</button>
        <div>
          {trainers.map((trainer, index) => {
            const foundTeams = trainersTeams.filter((team) => {
              return trainer.id === team.trainer_id;
            });
            return <div key={index}>
              <div className='name-header'>
                <h2>Name: <span>{trainer.name}</span></h2>
                <h2>Level: <span>{trainer.level}</span></h2>
                <img className='delete-buttons' alt='delete button' src={Delete} onClick={() => deleteTrainer(trainer.id)}/>
              </div>
              {foundTeams.map((pokemon, index) => {
                return <div key={index} className='team-display'>
                  <img className='sidebar-images' alt='pokemon' src={pokemon.pokemon_one}/>
                  <img className='sidebar-images' alt='pokemon' src={pokemon.pokemon_two}/>
                  <img className='sidebar-images' alt='pokemon' src={pokemon.pokemon_three}/>
                  <img className='sidebar-images' alt='pokemon' src={pokemon.pokemon_four}/>
                  <img className='sidebar-images' alt='pokemon' src={pokemon.pokemon_five}/>
                  <img className='delete-buttons' src={Delete} alt='delete button' onClick={() => deletePokemonTeam(pokemon.id)}/>
                </div>;
              })}
            </div>;
          })}
        </div>
      </div>
    );
  }
}

TrainersSideBar.propTypes = {
  trainersTeams: PropTypes.array,
  trainers: PropTypes.array,
  toggleAddTrainer: PropTypes.func,
  deleteTrainer: PropTypes.func,
  deletePokemonTeam: PropTypes.func
};

export default TrainersSideBar;