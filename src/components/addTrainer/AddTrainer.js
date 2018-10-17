import React, { Component } from 'react';
import './addTrainer.css';
import PropTypes from 'prop-types';

class AddTrainer extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      level: 1
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({
      name: value
    });
  } 

  handleSubmit = () => {
    this.props.addTrainer(this.state);
  }


  render() {
    return (
      <div className='add-trainer-input'>
        <div className='image-section'>
          <img
            className='trainer-image'
            src='https://vignette.wikia.nocookie.net/pokemon-and-digimon/images/7/7a/Hoennash.png/revision/latest?cb=20130701183623'
            alt='ash ketchum'
          />
        </div>
        <div className='input-section'>
          <input
            placeholder='Enter Trainer Name'
            className='trainer-input'
            onChange={(event) => this.handleChange(event)}
            type='text'
            value={this.state.name}
          />
          <button className='add-trainer-buttons' onClick={this.handleSubmit}>Add trainer</button>
          <button className='add-trainer-buttons' onClick={this.props.toggleAddTrainer}>Go Back</button>
        </div>
      </div>
    );
  }
}

AddTrainer.propTypes = {
  addTrainer: PropTypes.func,
  toggleAddTrainer: PropTypes.func
};

export default AddTrainer;