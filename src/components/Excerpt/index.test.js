import React from 'react';
import ReactDOM from 'react-dom';
import Excerpt from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Excerpt />, div);
});
