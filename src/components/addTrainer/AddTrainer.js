import React, { Component } from 'react'
import './addTrainer.css'

class AddTrainer extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      level: 1
    }
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value
    })
  } 

  handleSubmit = () => {
    this.props.addTrainer(this.state)
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
            onChange={(e) => this.handleChange(e)}
            type='text'
            value={this.state.name}
          />
          <button className='add-trainer-buttons' onClick={this.handleSubmit}>Add trainer</button>
          <button className='add-trainer-buttons' onClick={this.props.toggleAddTrainer}>Go Back</button>
        </div>
      </div>
    )
  }
}

export default AddTrainer