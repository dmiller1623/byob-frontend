import React from 'react'
import { shallow } from 'enzyme' 
import { Header } from './header.js'

describe('header', () => {
  let wrapper;
  it('should match the snapshot', () => {
    wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })
})  