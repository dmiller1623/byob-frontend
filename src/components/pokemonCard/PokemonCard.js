import React, { Component } from 'react';
import './pokemonCard.css'
import add from '../../images/Add.png'
import stats from '../../images/Stats.png'

class Pokemoncard extends Component {
  constructor(props) {
    super();
    this.state = {
      clicked: false
    }
  };
  
  handleClick = (e) => {
    e.preventDefault()
    let clicked = !this.state.clicked
    this.setState ({
      clicked
    })
  }

  render () {
    const { name, type, img, speed, attack, defense, hp, addToPokemonTeam } = this.props;

    return(
      <div className='poke-card'>
        <h1 className='poke-card-name'>{name}</h1>
        <div>
          <img
            alt='left click button' 
            src={add}
            className='poke-card-btn'
            onClick={() => addToPokemonTeam(img)}/>
          <img alt='right click button' src={stats} 
            className='poke-card-btn'
            onClick={(e) => this.handleClick(e)}/>
        </div>
        <img alt='main pokemon image' className='main-poke-img' src={img}/>
        {this.state.clicked && <p className='stats'>Type: {type}</p>}
        {this.state.clicked && <p className='stats'>Speed: {speed}</p>}
        {this.state.clicked && <p className='stats'>Attack: {attack}</p>}
        {this.state.clicked && <p className='stats'>Defense: {defense}</p>}
        {this.state.clicked && <p className='stats'>HP: {hp}</p>}
      </div>
    )
  };
};

export default Pokemoncard;