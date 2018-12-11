import React from 'react'
import Game from './game'
import {shallow, mount} from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<Game />);
});

it('renders game status correctly', () => {
  const wrapper = mount(<Game />)
  const firstPlayer = wrapper.find('div.game-info').children().first().text()
  expect(firstPlayer).toEqual('Next player: X')

  const button = wrapper.find('button.square').first()
  button.simulate('click')
  const secondPlayer = wrapper.find('div.game-info').children().first().text()
  expect(secondPlayer).toEqual('Next player: O')

  const turn2 = wrapper.find('button.square').at(1)
  turn2.simulate('click')

  const turn3 = wrapper.find('button.square').at(3)
  turn3.simulate('click')

  const turn4 = wrapper.find('button.square').at(5)
  turn4.simulate('click')

  const turn5 = wrapper.find('button.square').at(6)
  turn5.simulate('click')

  const winner = wrapper.find('div.game-info').children().first().text()
  expect(winner).toEqual('Winner: X')
})

it('returns status as Draw when there is a draw', () => {
  const wrapper = mount(<Game />)
  const firstPlayer = wrapper.find('div.game-info').children().first().text()

  const turn1 = wrapper.find('button.square').first()
  turn1.simulate('click')

  const turn2 = wrapper.find('button.square').at(4)
  turn2.simulate('click')

  const turn3 = wrapper.find('button.square').at(5)
  turn3.simulate('click')

  const turn4 = wrapper.find('button.square').at(8)
  turn4.simulate('click')

  const turn5 = wrapper.find('button.square').at(7)
  turn5.simulate('click')

  const turn6 = wrapper.find('button.square').at(6)
  turn6.simulate('click')

  const turn7 = wrapper.find('button.square').at(2)
  turn7.simulate('click')

  const turn8 = wrapper.find('button.square').at(1)
  turn8.simulate('click')

  const turn9 = wrapper.find('button.square').at(3)
  turn9.simulate('click')

  const result = wrapper.find('div.game-info').children().first().text()
  expect(result).toEqual('It\'s a Draw!')
})

it('returns status as Draw when there is a draw', () => {
  const wrapper = mount(<Game />)
  const firstPlayer = wrapper.find('div.game-info').children().first().text()

  const turn1 = wrapper.find('button.square').first()
  turn1.simulate('click')

  const turn2 = wrapper.find('button.square').at(1)
  turn2.simulate('click')

  const turn3 = wrapper.find('button.square').at(4)
  turn3.simulate('click')

  const turn4 = wrapper.find('button.square').at(3)
  turn4.simulate('click')

  const turn5 = wrapper.find('button.square').at(5)
  turn5.simulate('click')

  const turn6 = wrapper.find('button.square').at(6)
  turn6.simulate('click')

  const turn7 = wrapper.find('button.square').at(7)
  turn7.simulate('click')

  const turn8 = wrapper.find('button.square').at(2)
  turn8.simulate('click')

  const turn9 = wrapper.find('button.square').at(8)
  turn9.simulate('click')

  const result = wrapper.find('div.game-info').children().first().text()
  expect(result).toEqual('Winner: X')
})
