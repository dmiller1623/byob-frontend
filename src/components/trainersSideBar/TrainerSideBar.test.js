import React from 'react';
import { shallow } from 'enzyme'; 
import TrainersSideBar from './trainersSideBar.js';

describe('TrainerSideBar', () => {
  let wrapper;
  let trainersTeamsMock = []
  let trainersMock =[]
  let deleteTrainerMock
  let toggleAddTrainerMock
  let deletePokemonTeamMock

  it('should match the snapshot', () => {
    wrapper = shallow(<TrainersSideBar trainers={trainersMock} trainersTeam={trainersTeamsMock}/>);
    expect(wrapper).toMatchSnapshot();
  });
});  