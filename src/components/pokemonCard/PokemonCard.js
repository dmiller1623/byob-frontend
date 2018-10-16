import React, { Component } from 'react';
import './pokemonCard.css'

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
      <div 
        className='poke-card'>
        <h1>{name}</h1>
        <img onClick={(e) => this.handleClick(e)} src={img}/>
        {this.state.clicked && <p>Type: {type}</p>}
        {this.state.clicked && <p>Speed: {speed}</p>}
        {this.state.clicked && <p>Attack: {attack}</p>}
        {this.state.clicked && <p>Defense: {defense}</p>}
        {this.state.clicked && <p>HP: {hp}</p>}
        <button onClick={() => addToPokemonTeam(img)}>Add</button>
      </div>
    )
  };
};

export default Pokemoncard;