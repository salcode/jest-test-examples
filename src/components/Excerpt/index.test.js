import React from 'react';
import ReactDOM from 'react-dom';
import Excerpt from './';

it('renders the correct length substring', () => {
  const container = document.createElement('div');
  const rendered = ReactDOM.render(
    <Excerpt
      content="Hi everybody"
      maxChars={4}
    />,
    container
  );
  expect(container.textContent).toBe('Hi');
});
