const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
  const res = utils.add(33, 11);
  expect(res).toBe(44).toBeA('number');
});

it('should add two numbers', () => {
  const res = utils.square(4);
  expect(res).toBe(16).toBeA('number');
});

it('should set first name and last name', () => {
  const res = utils.setName({age: 35, location: 'London'}, 'Vijay Rana');
  expect(res).toInclude({
    firstName: 'Vijay',
    lastName: 'Rana'
  }).toBeA('object');
});

