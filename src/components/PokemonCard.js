import React, { Component } from 'react';
import Charizard from '../images/charizard.png'

class Pokemoncard extends Component {
  constructor(props) {
    super();
    this.state = {
    }
  };

  render () {
    const { name, type, img, speed, attack, defense, hp } = this.props;
    console.log(img)
    return(
      <div>
        <h1>{name}</h1>
        <img src={img}/>
      </div>
    )
  };
};

export default Pokemoncard;