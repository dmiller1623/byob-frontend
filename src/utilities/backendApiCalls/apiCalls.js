export const getTrainers = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/trainers');
    const trainers = await response.json();
    return trainers
  }
catch(error) {
    throw new Error(error.message)
  }
}

export const getPokemonTeams = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/pokemon');
    const pokemon = await response.json();
    return pokemon
  }
  catch(error) {
    throw new Error(error.message)
  }
}