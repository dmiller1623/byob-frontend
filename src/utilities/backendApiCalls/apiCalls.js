export const getTrainers = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/trainers');
    const trainers = await response.json();
    return trainers;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getPokemonTeams = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/pokemon');
    const pokemon = await response.json();
    return pokemon;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const postPokemonTeam = async (team) => {
  try {
    await fetch('http://localhost:3000/api/v1/pokemon', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(team)
    });
  } catch (error) {
    throw new Error(error.message);
  }
}; 

export const postTrainer = async (trainer) => {
  try {
    await fetch('http://localhost:3000/api/v1/trainers', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(trainer)
    });

  } catch (error) {
    throw new Error(error.message);
  }
};

export const removeTrainer = async (trainerId) => {
  try {
    await fetch(`http://localhost:3000/api/v1/trainers/${trainerId}`, {
      method: 'DElETE'
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const removePokemonTeam = async (teamId) => {
  try {
    await fetch(`http://localhost:3000/api/v1/pokemon/${teamId}`, {
      method: 'DElETE'
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
