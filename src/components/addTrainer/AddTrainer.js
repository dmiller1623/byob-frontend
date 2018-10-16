import React, { Component } from 'react'

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
        <input
          onChange={(e) => this.handleChange(e)}
          type='text'
          value={this.state.name}
        />
        <button onClick={this.handleSubmit}>Add trainer</button>
        <button onClick={this.props.toggleAddTrainer}>Go Back</button>
      </div>
    )
  }
}

export default AddTrainer