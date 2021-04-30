import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('My first test', () => {
    expect(Math.max(1, 5, 10)).toBe(10);
});

it('sums numbers', () => {
  expect(Math.max(1, 2)).toEqual(2);
  expect(Math.min(2, 2)).toEqual(2);
});

test('My second test', () => {
    expect(Math.max(1, 5, 10)).toBe(10);
});
